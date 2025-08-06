const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionaireBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')

let data = []

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json()
  
  const user = data.results[0]
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 100000)
  }
  addData(newUser);
  
}

function addData(obj) {
  data.push(obj)
  updateDOM()
}

function updateDOM(providedData = data){
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'
  providedData.forEach((item) => {
   const element = document.createElement('div')
   element.classList.add('person')
   element.innerHTML = `<strong>${item.name}</strong> $${formatMoney(item.money)}`
   main.appendChild(element)
  })
}

// Format number as money
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 }
  })
  updateDOM()
}

function sortByRichest() {
  data.sort((a, b) => b.money - a.money)
  updateDOM()
}

function showMillionaires() {
  data = data.filter((item) => item.money > 100000)
  updateDOM()
}

function calculateTotalWealth() {
  const total = data.reduce((acc, item) => {
    acc = acc + item.money
    return acc
  }, 0)
  
  const element = document.createElement('div')
  element.innerHTML = `<h3>Total Wealth: <strong>$${formatMoney(total)}</strong></h3>`
  main.appendChild(element)
}

// Event listner
addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleMoney)
sortBtn.addEventListener('click', sortByRichest)
showMillionaireBtn.addEventListener('click', showMillionaires)
calculateWealthBtn.addEventListener('click', calculateTotalWealth)

getRandomUser()

//***** Examine the document object ****/  
console.dir(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
// document.title = 'Title is now changed'
console.log(document.head);
console.log(document.body);
console.log(document.querySelectorAll("#main-header"));
console.log(document.forms);
console.log(document.links);
console.log(document.images);

/** GET ELEMENT BY ID */
// console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
// headerTitle.textContent = 'New Header' // Doesn't pay attention to styles
// headerTitle.innerText = 'Goodbye'     // Pays attention to styles
// headerTitle.innerHTML = '<h3>Hello h3</h3>'
// header.style.borderBottom = 'solid 3px #000'

/** GET ELEMENTS BY CLASSNAME */
// let items = document.getElementsByClassName('list-group-item')
// console.log(items);
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'
// items.style.backgroundColor = '#f4f4f4'

// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }

/** GET ELEMENTS BY TAGNAME */
// let li = document.getElementsByTagName('li')
// console.log(li);
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'


// for(let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }

/********** QUERY SELECTOR *************/

// let headers = document.querySelector('#main-header')
// headers.style.borderBottom = 'solid 3px green'

// let input = document.querySelector('input')
// input.value = 'Hello world'

// let submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND"

// let item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// let lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'

// let secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'green'

/********** QUERY SELECTOR ALL *************/

// let titles = document.querySelectorAll('.title')
// console.log(titles);
// titles[0].textContent = 'Title changed'

// let odd = document.querySelectorAll('li:nth-child(odd)')
// let even = document.querySelectorAll('li:nth-child(even)')
// console.log(odd);


// for(let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }

/********** TRAVERSING THE DOM *************/
// parentNode
// let itemList = document.querySelector('#items')
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'

// parentElement
let itemList = document.querySelector('#items')
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4'

// childNode
// console.log(itemList.childNodes);        // gives space as text node
// console.log(itemList.children);          // ignores space and it just gives child element
// itemList.children[1].style.backgroundColor = 'yellow'

// First child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

// Last child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4'

// Next sibling
// console.log(itemList.children[1].nextElementSibling);

// previous sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green'

// Create element
// let newDiv = document.createElement('div')
// newDiv.className = 'new-div'
// newDiv.id = 'newDiv'
// newDiv.setAttribute('title', 'title of new div')


// create text node
// let newDivText = document.createTextNode('Hello Text')
// newDiv.appendChild(newDivText)

// insert into DOM
// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1')
// container.insertBefore(newDiv, h1)

function buttonClick(e) {
    // console.log('clicked', e.target.id, e.type);  
    // console.log('position from window', e.clientX, e.clientY);  
    // console.log('position from button', e.offsetX, e.offsetY);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
    
}

// let button = document.getElementById('btn')
// button.addEventListener('click', buttonClick)

/********** MOUSE EVENTS *************/

// let button = document.getElementById('btn')
// let box = document.getElementById('box')

//button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)
// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)
// box.addEventListener('mousemove', runEvent)

// function runEvent(e) {
//     console.log('event type', e.type);
//     // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
    
// }

/********** KEYBOARD EVENTS *************/

let itemInput = document.querySelector('input[type="text"]')
let form = document.querySelector('form')
let select = document.querySelector('select')

// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)

// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)

itemInput.addEventListener('cut', runEvent)
itemInput.addEventListener('paste', runEvent)

itemInput.addEventListener('input', runEvent)

select.addEventListener('change', runEvent)
select.addEventListener('input', runEvent)
form.addEventListener('submit', runEvent)

function runEvent(e) {
    e.preventDefault()
    console.log('event type', e.type);
    // console.log('event value', e.target.value);
}
//***** Examine the document object ****/  
console.dir(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
// document.title = 'Title is now changed'
console.log(document.head);
console.log(document.body);
console.log(document.querySelectorAll("#main-header"));
console.log(document.forms);
console.log(document.links);
console.log(document.images);

/** GET ELEMENT BY ID */
// console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
// headerTitle.textContent = 'New Header' // Doesn't pay attention to styles
// headerTitle.innerText = 'Goodbye'     // Pays attention to styles
// headerTitle.innerHTML = '<h3>Hello h3</h3>'
// header.style.borderBottom = 'solid 3px #000'

/** GET ELEMENTS BY CLASSNAME */
// let items = document.getElementsByClassName('list-group-item')
// console.log(items);
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'
// items.style.backgroundColor = '#f4f4f4'

// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }

/** GET ELEMENTS BY TAGNAME */
// let li = document.getElementsByTagName('li')
// console.log(li);
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'


// for(let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }

/********** QUERY SELECTOR *************/

// let headers = document.querySelector('#main-header')
// headers.style.borderBottom = 'solid 3px green'

// let input = document.querySelector('input')
// input.value = 'Hello world'

// let submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND"

// let item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// let lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'

// let secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'green'

/********** QUERY SELECTOR ALL *************/

// let titles = document.querySelectorAll('.title')
// console.log(titles);
// titles[0].textContent = 'Title changed'

// let odd = document.querySelectorAll('li:nth-child(odd)')
// let even = document.querySelectorAll('li:nth-child(even)')
// console.log(odd);


// for(let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }

/********** TRAVERSING THE DOM *************/
// parentNode
// let itemList = document.querySelector('#items')
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'

// parentElement
let itemList = document.querySelector('#items')
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4'

// childNode
// console.log(itemList.childNodes);        // gives space as text node
// console.log(itemList.children);          // ignores space and it just gives child element
// itemList.children[1].style.backgroundColor = 'yellow'

// First child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

// Last child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4'

// Next sibling
// console.log(itemList.children[1].nextElementSibling);

// previous sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green'

// Create element
// let newDiv = document.createElement('div')
// newDiv.className = 'new-div'
// newDiv.id = 'newDiv'
// newDiv.setAttribute('title', 'title of new div')


// create text node
// let newDivText = document.createTextNode('Hello Text')
// newDiv.appendChild(newDivText)

// insert into DOM
// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1')
// container.insertBefore(newDiv, h1)

function buttonClick(e) {
    // console.log('clicked', e.target.id, e.type);  
    // console.log('position from window', e.clientX, e.clientY);  
    // console.log('position from button', e.offsetX, e.offsetY);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
    
}

// let button = document.getElementById('btn')
// button.addEventListener('click', buttonClick)

/********** MOUSE EVENTS *************/

// let button = document.getElementById('btn')
// let box = document.getElementById('box')

//button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)
// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)
// box.addEventListener('mousemove', runEvent)

// function runEvent(e) {
//     console.log('event type', e.type);
//     // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
    
// }

/********** KEYBOARD EVENTS *************/

let itemInput = document.querySelector('input[type="text"]')
let form = document.querySelector('form')
let select = document.querySelector('select')

// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)

// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)

itemInput.addEventListener('cut', runEvent)
itemInput.addEventListener('paste', runEvent)

itemInput.addEventListener('input', runEvent)

select.addEventListener('change', runEvent)
select.addEventListener('input', runEvent)
form.addEventListener('submit', runEvent)

function runEvent(e) {
    e.preventDefault()
    console.log('event type', e.type);
    // console.log('event value', e.target.value);
}

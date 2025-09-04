
// var x = 7

// function getName() {
//   console.log('Namaste JS!');
// }
// getName()

// {
//   var a = 10;
//   let b = 20;
//   const c = 30
// }

// function x() {
//   for(var i = 1; i <=5; i++) {
//     function close(a) {
//       setTimeout(function() {
//       console.log(a);
      
//       }, a*1000)
//     }
//   close(i)
//   } 
// }
// x()

// setTimeout(() => {
//   console.log('timer');
// }, 5000)

// function x(y) {
//   console.log('x');
//   y()
// }

// x(function y() {
//   console.log('y');
// })

const radiusArr = [2, 3, 4, 5]

const area = (radius) => {
  return Math.PI * radius * radius
}

const calculate = (radiusArr, logic) => {
  let output = []
  for(let i = 0; i < radiusArr.length; i++) {
    output.push(logic(radiusArr[i]))
  }
  return output
}

// console.log(calculate(radiusArr, area));
 
/******************* Array prototype ******************/
Array.prototype.calculate = function(logic) {
   let output = []
 
   for(let i = 0; i < this.length; i++) {
    output.push(logic(this[i]))
  }
  
  
  return output
}

// console.log(radiusArr.calculate(area));

/************ Map, filter, reduce *******************/

const arr = [1, 20, 3, 4, 50]

// const binary = arr.map((a) => a.toString(2))
// const filteredValues = arr.filter((a) => a % 2 === 0 ? a : null)
// console.log(filteredValues);

// function findMax(arr) {
//   let max = arr[0]
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }

// console.log(findMax(arr));

// const maxNo = arr.reduce((acc, curr) => {
//   if(curr > acc) {
//     acc = curr
//   }
//   return acc
// }, arr[0])

// console.log(maxNo);

const users = [
  {firstName: 'Ankita', lastName: 'kumari', age: 30},
  {firstName: 'Harsh', lastName: 'Shandilya', age: 32},
  {firstName: 'Anjali', lastName: 'kumari', age: 30},
  {firstName: 'Khushboo', lastName: 'kumari', age: 40}
]

const ages = users.reduce((acc, user) => {
  acc = {
    ...acc,
    [user.age] : acc[user.age] ? acc[user.age] + 1 : 1
  }
  return acc
}, {})

// console.log(ages);

const ageLessThan35 = users.reduce((acc, curr) => {
  if(curr.age < 35){
    acc.push(curr.firstName)
  }
  return acc
}, [])

// console.log(ageLessThan35);

/************ CALLBACK HELL AND INVERSION OF CONTROL *******************/

const cart = ["shoes", "shirts", 'pants']

// api.createOrder(cart, function() {
//   api.proceedToPayment(function() {
//     api.showOrderSummary(function() {
//       api.updateWallet()
//     })
//   })
// })

/************ PROMISES *******************/
/***** 
 * Promise is an object that represents eventual completion or failure of an async operation
 * Promise in pending state is an empty object
 * Promise object can be resolved only once
 * Promise object is immutable
 * You must return a promise or value to keep using promise chain
 * catch handles all the then blocks above it and not the ones below it
 */

const GITHUB_API = 'https://jsonplaceholder.typicode.com/posts'
const user = fetch(GITHUB_API)

user
.then((data) => data.json())
.then(res => {})



// Creating PROMISES ************************

const cartItems = ['shoes', "shirts", "pants"]

const validateCart = (cart) => {
  return true
}

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => resolve(`Payment for order id ${orderId} is successful`))
}

const showOrderSummary = (msg) => {
  return new Promise((resolve, reject) => resolve(msg))
}

createOrder(cartItems)
.then((orderId) => {
  // console.log(orderId);
  return orderId
}).then((id) => {
  return proceedToPayment(id)
}).then((msg) => {
  // console.log(msg);
  
  return showOrderSummary(msg)
})
.catch((err) => {
  // console.log(err.message);
})

function createOrder(cartItems) {
  const pr = new Promise((resolve, reject) => {
    // validate cart items
    // create order in db
    // receive order id 

    if(!validateCart(cartItems)) {
      const err = new Error('cart item is not valid')
      reject(err)
    }
    const orderId = '12345'
    if(orderId) {
      setTimeout(() => resolve(orderId), 5000)
    }
  })
  return pr
}


/************ PROMISE APIs 
 * Promise.all([p1, p2, p3]) - wait for all of them to finish; if any promise fails then promise.all() gets rejected and does not wait for other promises to return value;
 * Promise.allSettled([p1, p2, p3]) - wait for all promises to settle and returns an array of object;
 * Promise.race([p1, p2, p3]) - gives value of the first settled promise whether its success or error;
 * Promise.any([p1, p2, p3]]) - gives value of the first successful promise; if all fails then it will return Aggregate error which is an array of all errors
 * *******************/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P1 success'), 3000)
  // setTimeout(() => reject('P1 fail'), 3000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P2 success'), 1000)
  //setTimeout(() => reject('P2 fail'), 1000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P3 success'), 2000)
  // setTimeout(() => reject('P3 fail'), 2000)
})

// Promise.all([p1, p2, p3])
//   .then(res => { console.log(res) })
//   .catch(err => { console.error(err) })

// Promise.allSettled([p1, p2, p3])
//   .then(res => { console.log(res) })
//   .catch(err => { console.error(err) })

// Promise.race([p1, p2, p3])
//   .then(res => { console.log(res) })
//   .catch(err => { console.error(err) })

Promise.any([p1, p2, p3])
  .then(res => { 
    // console.log(res)
   })
  .catch(err => { 
    // console.error(err)
    // console.log(err.errors)
  })

/************ ASYNC AWAIT 
 * Async function always returns a promise; if we return a normal value from async function then also async function wraps it inside promise before returning it
 * Await keyword can only be used inside async function
 * When an await expression is encountered within an async function, the execution of that specific async function pauses until the Promise being awaited resolves or rejects
 * *******************/

// const p = new Promise((resolve, reject) => {
//   resolve('Promise value is resolved!!')
// })

// async function getData() {
//   // return 'Namaste Async!!'
//   return p
// }

// const dataPromise = getData()
// dataPromise.then(res => { console.log(res)})

// async function getUser() {
//   const res = await p
//   console.log(res);
// }

// getUser()


const p4 = new Promise((resolve, reject) => {
  console.log('im inside 4');
  setTimeout(() => {
    resolve('Promise 4 value is resolved!!')
  }, 10000);
})

const p5 = new Promise((resolve, reject) => {
  console.log('im inside 5');
  setTimeout(() => {
    resolve('Promise 5 value is resolved!!')
  }, 5000);
})

 
async function learnAsyncAwait() {
  // console.log(new Date().getSeconds());
  
  const v1 = await p4
  // console.log(new Date().getSeconds(), v1);
  
  const v2 = await p5
 
  // console.log(new Date().getSeconds(), v2);
}

// learnAsyncAwait()

async function realWorldAsync() {
  const API = 'https://jsonplaceholder.typicode.com/todos/'
  try {
    const data = await fetch(API)
    const response = await data.json()
    console.log(response); 
  } catch (err) {
    console.log(err); 
  }
}

realWorldAsync()


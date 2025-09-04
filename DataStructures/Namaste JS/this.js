// this in global space represents global object. In case of browsers global object is Window, in nodejs it is Global, etc...
console.log(this);  


// this inside function
function x() {
  /********
   * value depends on strict/non strict mode
   * In strict mode value will be undefined whereas in non strict mode, value is Window object
   * If the value of this keyword is undefined/null then its value will be replaced with global object only in non strict mode (this substitution)
   * the value of this keyword depends on how the function is called
   ********/
  console.log(this);
}

x()             // here the value of this would be undefined in strict mode
window.x()      // here the value of this would be window

// this inside an object
const obj = {
  a: 10,
  x: function() {               // function inside an object is called method
    console.log(this.a);        // this refers to the object that called function
  }
}

obj.x()

const obj2 = {
  a: 10,
  x: () => {               // arrow function does not have its own this binding
    console.log('arrow-----', this);   // it retains the this value of enclosing lexical context. Here enclosing lexical context of arrow function is global space.
  },
  y: function() {
    const z = () => {
      console.log('arrow inside normal function----', this); // here enclosing lexical context is normal function y
    }
    z()
  },
  k: () => {
    function hello() {
      console.log('normal function inside arrow function----', this);
    }
    hello()
  }
}

obj2.x()
obj2.y()
obj2.k()

// this in call, apply and bind
let name1 = {
  firstname: 'Ankita',
  lastname: 'Kumari',
  fullName: function() {
    console.log(this.firstname + " " + this.lastname);
  }
}

let name2 = {
  firstname: 'Harsh',
  lastname: 'Shandilya',
}

// name1.fullName.call(name2)

// 2nd way to use call, apply bind
function getFullName(hometown, state) {
  console.log(this.firstname + " " + this.lastname + ' from ' + hometown + ',' + state);
}

let name3 = {
  firstname: 'Ankita2',
  lastname: 'Kumari',
}

let name4 = {
  firstname: 'Harsh2',
  lastname: 'Shandilya',
}

// getFullName.call(name4, "Begusarai", "Bihar")
// getFullName.apply(name4, ["Begusarai", "Bihar"])
// const getBindedFullName = getFullName.bind(name3, "Begusarai", "Bihar")
// getBindedFullName()

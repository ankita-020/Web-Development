let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack);
// console.log(stack[1]); // INVALID OPN even though we get result

stack.pop();
//console.log(stack);

let top = stack[stack.length - 1]; // peek/top

// Implement stack using two queue
const MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  const length = this.q1.length;
  for (let i = 0; i < length - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let ans = this.q1.shift();

  // swap main queue and helper queue
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return ans;
};

MyStack.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let ans = this.q1.shift();
  this.q2.push(ans);

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return ans;
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

// Implement stack using one queue
const MyStackOfOneQueue = function () {
  this.q1 = [];
};

MyStackOfOneQueue.prototype.push = function (x) {
  this.q1.push(x);
};

MyStackOfOneQueue.prototype.pop = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q1.push(this.q1.shift());
  }
  return this.q1.shift();
};

MyStackOfOneQueue.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q1.push(this.q1.shift());
  }

  let ans = this.q1.shift();
  this.q1.push(ans);
  return ans;
};

MyStackOfOneQueue.prototype.empty = function () {
  return this.q1.length === 0;
};

function isValidParenthesis(str) {
  let stack = [];
  let validMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < str.length; i++) {
    if (Object.hasOwn(validMap, str[i])) {
      stack.push(str[i]);
    } else {
      let top = stack.pop();
      if (!top || str[i] !== validMap[top]) {
        return false;
      }
    }
  }

  return true;
}

//console.log(isValidParenthesis("[({})]"));

const MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (x) {
  // store value and minValue at each index
  if (this.stack.length === 0) {
    this.stack.push([x, x]);
  } else {
    let minValue = Math.min(x, this.stack[this.stack.length - 1][1]);
    this.stack.push(x, minValue);
  }
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  let ans = this.stack[this.stack.length - 1][0];
  return ans;
};

MinStack.prototype.getMin = function () {
  // this gets min element of stack in O(1) time complexity
  return this.stack[this.stack.length - 1][1];
};

function removeOuterMostParanthesis(str) {
  let stack = [];
  let ans = "";

  // Opening bracket push into stack, closing bracket then pop from stack
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
      if (stack.length > 1) {
        ans = ans + str[i];
      }
    } else {
      if (stack.length > 1) {
        ans = ans + str[i];
      }
      stack.pop();
    }
  }
  return ans;
}

//console.log(removeOuterMostParanthesis("(()())(())(()(()))"));

function removeOuterMostParanthesis2(str) {
  let ans = "";
  let level = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      level++;
      ans += level > 1 ? str[i] : "";
    } else {
      ans += level > 1 ? str[i] : "";
      level--;
    }
  }
  return ans;
}
//console.log(removeOuterMostParanthesis2("(()())(())(()(()))"));

function evaluateReversePolishExpression(arr) {
  let stack = [];
  let operatorObj = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => Math.trunc(a / b),
    "*": (a, b) => a * b,
  };

  for (let i = 0; i < arr.length; i++) {
    if (!Object.hasOwn(operatorObj, arr[i])) {
      stack.push(arr[i]);
    } else {
      let second = stack.pop();
      let first = stack.pop();
      // let ans = eval(`${first} ${arr[i]} ${second}`)
      let ans = operatorObj[arr[i]](Number(first), Number(second));
      stack.push(ans);
    }
  }

  return stack.pop();
}

// console.log(
//   evaluateReversePolishExpression(["4", "-2", "/", "2", "-3", "-", "-"])
// );

function nextGreaterElement(arr1, arr2) {
  // arr1 is subset of arr2
  for (let i = 0; i < arr1.length; i++) {
    let max = arr1[i];
    let j;
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) break;
    }
    for (let k = j + 1; k < arr2.length; k++) {
      if (arr2[k] > max) {
        max = arr2[k];
        break;
      }
    }
    max = max === arr1[i] ? -1 : max;
    arr1[i] = max;
  }
  return arr1;
}

function nextGreaterElement2(arr1, arr2) {
  // arr1 is subset of arr2
  let stack = [];
  let obj = {};
  let n = arr2.length;

  stack.push(arr2[n - 1]);
  obj[arr2[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (top > arr2[i]) {
        obj[arr2[i]] = top;
        break;
      } else {
        stack.pop();
      }
    }
    if (stack.length === 0) {
      obj[arr2[i]] = -1;
    }

    stack.push(arr2[i]);
  }

  for (let j = 0; j < arr1.length; j++) {
    arr1[j] = obj[arr1[j]];
  }
  return arr1;
}

//console.log(nextGreaterElement2([2, 4], [1, 2, 3, 4]));

function noOfDaysToWaitForNextWarmerTemp(arr) {
  let stack = [];
  let ans = [];
  let n = arr.length;
  ans[n - 1] = 0;
  stack.push(n - 1);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let topIndex = stack[stack.length - 1];
      let topValue = arr[topIndex];
      if (topValue > arr[i]) {
        ans[i] = topIndex - i;
        break;
      } else {
        stack.pop();
      }
    }

    if (stack.length === 0) {
      ans[i] = 0;
    }
    stack.push(i);
  }
  return ans;
}

// console.log(
//   noOfDaysToWaitForNextWarmerTemp([89, 62, 70, 58, 47, 47, 46, 76, 100, 70])
// );

function nextGreaterElementInCircularArray(nums) {
  let arr = [...nums, ...nums]; // double the array if it is circular
  let n = arr.length;

  let stack = [];
  stack.push(arr[n - 1]);

  let ans = [];
  ans[n - 1] = -1;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (top > arr[i]) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }

    if (stack.length === 0) {
      ans[i] = -1;
    }
    stack.push(arr[i]);
  }

  return ans.slice(0, nums.length);
}
console.log(nextGreaterElementInCircularArray([1, 2, 1]));

function nextGreaterElementInCircularArray2(arr) {
  let n = arr.length;
  let stack = [];
  let ans = Array(n).fill(-1);

  stack.push(arr[n - 1]);

  for (let i = 2 * n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (top > arr[i % n]) {
        ans[i % n] = top;
        break;
      } else {
        stack.pop();
      }
    }

    if (stack.length === 0) {
      ans[i % n] = -1;
    }

    stack.push(arr[i % n]);
  }
  return ans;
}
console.log(nextGreaterElementInCircularArray2([1, 2, 1]));

/********* Implement Stack using LinkedList *******/
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

export default class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    const node = new Node(item);
    node.prev = this.top;
    this.top = node;
    this.length++;
    return this.length;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    if (this.length) {
      const node = this.top;
      this.top = node.prev;
      node.prev = null;
      this.length--;
      return node.val;
    } else {
      return undefined;
    }
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    if (this.length) {
      return this.top.val;
    } else {
      return undefined;
    }
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.length;
  }
}

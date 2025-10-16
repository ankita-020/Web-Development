/*******************
 * Function calls itself to solve smaller versions of same problem
 * Base case - stop condition
 * Recursive case
 * Real life ex - Queue of people, Comment thread, Org hieararchy
 * Time: O(n)
 * Recursion is used when a problem can be broken into sub problems, in trees & graphs, in backtracking, dynamic programming, divide & conquer
 */

/**************** Print n to 1 ************/
function print(n) {
  if (n === 0) return;
  console.log(n);
  print(n - 1);
}

// console.log(print(10));

/************* Print 1 to n **************/
let x = 10;
function print2(n) {
  if (n > x) return;

  console.log(n);
  print2(n + 1);
}

// console.log(print2(1));

/*************** Sum of numbers *********/
function sum(n) {
  if (n < 1) return 0;

  return n + sum(n - 1);
}
// console.log(sum(3));

/************** Sum of all elements in an array */
function sumOfArray(arr) {
  if (arr.length === 0) return 0;

  return arr[arr.length - 1] + sumOfArray(arr.slice(0, arr.length - 1));
}

function sumOfArray2(arr) {
  return function sum2(n) {
    if (n === 0) {
      return arr[0];
    }
    return arr[n] + sum2(n - 1);
  };
}
// console.log(sumOfArray2([1, 2, 3, 4])(3));

let arr = [1, 2, 3, 4, 5];

function sumOfOddNo(n) {
  const isOdd = arr[n] % 2 !== 0;

  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sumOfOddNo(n - 1);
}

// console.log(sumOfOddNo(4));

function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

// console.log(factorial(5));

function isPowerOfTwo(n) {
  if (n === 1) return true;
  if (n < 1 || n % 2 !== 0) return false;

  return isPowerOfTwo(n / 2);
}
//console.log(isPowerOfTwo(8));

function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(3));

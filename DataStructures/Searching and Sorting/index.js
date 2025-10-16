/*********** Linear search **********/
function linerSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}
//console.log(linerSearch([1, 2, 3, 4], 13));

/************* Binary search
 * applies only to sorted arrays
 * T - O(logn), S - O(1)
 * */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 3));

/************ Bubble sort ->  T - O(n*n)
 * Improve performance by stopping iterations if array is sorted, by checking if any number is swaped or not
 * *************/
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false; // Improving performance

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}
//console.log(bubbleSort([5, 4, 9, 1, 0]));

/************ Selection sort -> T - O(n*n)
 * Improvement - if min = i, then don't swap
 * **********/
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

// console.log(selectionSort([5, 4, 9, 1, 0]));

/***** Insertion sort -> T - O(n*n) *****/
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let prev = i - 1;
    while (arr[prev] > current && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = current;
  }
  return arr;
}
// console.log(insertionSort([-10, 5, 2, 7, 1, 9, 4]));

/************ Merge sort (Divide & Conquer)
 * T - O(nlogn) : Divide and conquer takes O(logn) and merging 2 arrays takes T(n)
 * S - O(n)
 *  *************/
function mergeSortedArrays(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let n = arr1.length + arr2.length;
  let arr3 = [];

  for (let i = 0; i < n; i++) {
    console.log("p1", p1);

    if (arr1[p1] < arr2[p2] || p2 >= arr2.length) {
      arr3.push(arr1[p1]);
      p1++;
    } else {
      arr3.push(arr2[p2]);
      p2++;
    }
  }
  return arr3;
}

function mergeSortedArrays2(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  return [...res, ...arr1.slice(i), ...arr2.slice(j)];
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeSortedArrays2(left, right);
}

console.log(mergeSort([11, 15, 5, 10, 1, 6, 8, 9, 2, 3, 4]));

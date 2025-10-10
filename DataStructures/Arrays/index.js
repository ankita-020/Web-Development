/***** Duplicates in sorted array *******************/
// function removeDuplicates(arr) {
//   let index = 0;
//   // let arr1 = [];
//   // arr1[0] = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[index]) {
//       index++;
//       arr[index] = arr[i];
//     }
//   }

//   return arr;
// }

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/**************** Remove element if it is equal to value */
// function removeElement(arr, val) {
//   let index = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== val) {
//       arr[index] = arr[i];
//       index++;
//     }
//   }
//   return [arr, index];
// }

// console.log(removeElement([0, 1, 1, 2, 2, 3, 3, 4], 2));

/************* Reverse a string contained in array in-place */
// function reverseString(arr) {
//   let j = arr.length - 1;
//   let temp;

//   for (let i = 0; i < j; i++) {
//     console.log("i", i);

//     // temp = arr[i];
//     // arr[i] = arr[j];
//     // arr[j] = temp;
//     [arr[i], arr[j]] = [arr[j], arr[i]];

//     j--;
//   }

//   return arr;
// }

// function reverseString2(arr) {
//   let n = arr.length;
//   let halfLength = Math.floor(n / 2);

//   for (let i = 0; i < halfLength; i++) {
//     [arr[i], arr[n - 1 - i]] = [arr[n - 1 - i], arr[i]];
//   }
//   return arr;
// }

// console.log(reverseString2(["h", "e", "l", "l", "o"]));

/******************** Merge 2 sorted arrays *************/
// function mergeArrays(arr1, m, arr2, n) {
//   let p1 = 0;
//   let p2 = 0;

//   let arrCopy = arr1.slice(0, m);
//   for (let i = 0; i < m + n; i++) {
//     if ((p1 < m && arrCopy[p1] < arr2[p2]) || p2 >= n) {
//       arr1[i] = arrCopy[p1];
//       p1++;
//     } else {
//       arr1[i] = arr2[p2];
//       p2++;
//     }
//   }
//   return arr1;
// }

// function mergeArrays2(arr1, m, arr2, n) {
//   let p1 = m - 1;
//   let p2 = n - 1;

//   for (let i = m + n - 1; i >= 0; i--) {
//     if (p2 < 0) break;

//     if (p1 >= 0 && arr1[p1] > arr2[p2]) {
//       arr1[i] = arr1[p1];
//       p1--;
//     } else {
//       arr1[i] = arr2[p2];
//       p2--;
//     }
//   }
//   return arr1;
// }

//console.log(mergeArrays2([6, 7, 8, 0, 0, 0], 3, [2, 5, 6], 3));

/************ Put zeroes at the end in an array ****************/
// function moveZeroes(arr) {
//   let p1 = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[p1] = arr[i];
//       p1++;
//     }
//   }

//   for (let i = p1; i < arr.length; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// }
// console.log(moveZeroes([0, 1, 0, 0, 3, 12, 0, 0]));

/**************** Max consecutive 1's ************/
// function maxConsecutives(arr) {
//   let max = 0;
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       count++;
//       max = Math.max(count, max);
//     } else {
//       count = 0;
//     }
//   }

//   return max;
// }
// console.log(maxConsecutives([0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1]));

/************* Find missing no ***********************/
// function missingNum(arr) {
//   const n = arr.length;
//   const totalSum = (n * (n + 1)) / 2;
//   let partialSum = 0;

//   for (let i = 0; i < n; i++) {
//     partialSum = partialSum + arr[i];
//   }
//   return totalSum - partialSum;
// }
// console.log(missingNum([0, 5, 4, 1, 2]));

/***************** Find element which has count of 1 **************/
function singleElement(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj = {
      ...obj,
      [arr[i]]: obj.hasOwnProperty(arr[i]) ? obj[arr[i]] + 1 : 1,
    };
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) {
      return key;
    }
  }
}

function singleElement2(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
    console.log(xor ^ arr[i]);
  }
  return xor;
}

console.log(singleElement2([1, 2, 1, 3, 2, 3, 4]));

/************ 3 variations of binary search
 * while (l <= r) {
 *  l = middle + 1
 *  r = middle - 1
 * }
 *
 * while (l < r) {
 *  l = middle + 1
 *  r = middle
 * }
 *
 * while (l < r-1) {
 *  l = middle
 *  r = middle
 * }
 *  ***/

function squareRootOfNum(x) {
  // square root of a number never exceeds number/2
  // T - O(logn)
  let left = 2;
  let right = Math.floor(x / 2);
  if (x === 0 || x === 1) {
    return x;
  }

  while (left <= right) {
    let middle = Math.floor((left + right) / 2); // This way of calculating middle value may cause overflow for large values of left and right so other way is: let middle = left + (right - left) / 2
    if (middle * middle === x) {
      return middle;
    } else if (middle * middle < x) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return right; // When a number is not perfect square then right is the closest square root else middle is the square root
}

// console.log(squareRootOfNum(20));

/************ Searching in rotated array **************/
function searchingInRotatedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);

    if (target === arr[middle]) {
      return middle;
    }

    // Left side sorted condition
    if (arr[left] <= arr[middle]) {
      if (target < arr[middle] && target >= arr[left]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // right side is sorted
      if (target > arr[middle] && target <= arr[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
}

// console.log(searchingInRotatedArray([3, 1], 1));

function isBadVersion(n) {
  return n >= 3;
}

function firstBadVersion(version) {
  let left = 1;
  let right = version;

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (isBadVersion(middle)) {
      right = middle; // we are not doing middle - 1 because even middle can be the first bad version
    } else {
      left = middle + 1;
    }
  }
  return right;
}

// console.log(firstBadVersion(10));

function findPeakElement(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (arr[middle] > arr[middle + 1]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return left;
}

// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));

function findMinInRotatedSortedArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);

    if (arr[middle] < arr[right]) {
      // right side is sorted and ascending
      right = middle;
    } else if (arr[middle] > arr[left]) {
      if (arr[left] > arr[middle + 1]) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }
  }
  return arr[right];
}

// console.log(findMinInRotatedSortedArray([5, 6, 7, 8, 9, 0, 1, 2, 3, 4]));

function findFirstAndLastPosition(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let indexArr = [];

  // Finding first position
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);

    if (arr[middle] === target) {
      indexArr[0] = middle;
      right = middle - 1;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  // Finding last position
  left = 0;
  right = arr.length - 1;
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (arr[middle] === target) {
      indexArr[1] = middle;
      left = middle + 1;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return indexArr;
}

// console.log(
//   findFirstAndLastPosition([1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 5], 3)
// );

function findPeakElement(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (arr[middle] > arr[middle - 1] && arr[middle] > arr[middle + 1]) {
      return middle;
    } else if (arr[middle] < arr[middle + 1]) {
      left = middle + 1;
    } else if (arr[middle] > arr[middle + 1]) {
      right = middle - 1;
    }
  }
}

function findPeakElement2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (arr[middle] < arr[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return right;
}

// console.log(findPeakElement2([0, 1, 2, 3, 4, 6, 1, 0]));

function findOnlySingleElement(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);

    if (arr[middle] === arr[middle - 1]) {
      let noOfElementsOnLeft = middle - 1 - left;
      if (noOfElementsOnLeft % 2 === 1) {
        right = middle - 2;
      } else {
        left = middle + 1;
      }
    } else if (arr[middle] === arr[middle + 1]) {
      let noOfElementsOnLeft = middle - left;
      if (noOfElementsOnLeft % 2 === 1) {
        right = middle - 1;
      } else {
        left = middle + 2;
      }
    } else {
      return arr[middle];
    }
  }
}

//console.log(findOnlySingleElement([1, 1, 2, 3, 3, 4, 4, 8, 8]));

function findKClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (arr[middle + k] - x < x - arr[middle]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return arr.slice(left, left + k);
}

console.log(findKClosestElements([1, 2, 3, 4, 4, 5, 5, 6, 7], 4, 6));

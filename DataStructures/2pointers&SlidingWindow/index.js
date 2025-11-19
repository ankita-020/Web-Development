function twoSum(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

function twoSum2(arr, target) {
  let n = arr.length;
  let obj = {}; // S - O(n )

  for (let i = 0; i < n; i++) {
    obj[arr[i]] = i; // store indices of each element
  }

  for (let i = 0; i < n; i++) {
    const pairToFind = target - arr[i];
    // checks if other pair exists and it should not be the same element
    if (obj[pairToFind] && obj[pairToFind] !== i) {
      return [i, obj[pairToFind]];
    }
  }
}

// console.log(twoSum2([2, 3, 4], 6));

function twoSumInSortedArray(arr, target) {
  // 2 pointer approach because array is sorted in non decreasing order
  // T - O(n); S - O(1 )

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return [i + 1, j + 1]; // array was 1-indexed
    } else if (arr[i] + arr[j] > target) {
      j--;
    } else {
      i++;
    }
  }
}

// console.log(twoSumInSortedArray([2, 3, 4], 6));

function isSubsequence(s, t) {
  let p1 = 0;
  let p2 = 0;

  while (p2 < t.length) {
    if (s[p1] === t[p2]) {
      s2 = s2 + t[p2];
      p1++;
      p2++;
    } else {
      p2++;
    }
  }

  return p1 === s.length;
}

// console.log(isSubsequence("aec", "abcde"));

function firstOccurenceInString(haystack, needle) {
  // Sliding window approach
  // T - O(n*m); S - O(1)
  // This algorithm can be improved by KMP algo (Knuth-Morris-Pratt)

  let lastIndex = haystack.length - needle.length;

  for (let i = 0; i <= lastIndex; i++) {
    let j;
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === needle.length) {
      return i;
    }
  }

  return -1;
}

function KMPAlgo(haystack, needle) {}

//console.log(firstOccurenceInString("onionionsky", "onions"));

function maxAreaOfWater(arr) {
  let i = 0;
  let j = arr.length - 1;
  let maxArea = -Infinity;

  while (i < j) {
    let minHeight = Math.min(arr[i], arr[j]);
    let distance = j - i;
    let area = minHeight * distance;
    if (area > maxArea) {
      maxArea = area;
    }
    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
}

// console.log(maxAreaOfWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

function threeSum(arr) {
  let ans = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    twoSumSolution(arr, i, ans);
  }

  // remove duplicates from array
  let obj = {};
  let result = [];
  for (const item of ans) {
    const key = item.join(",");
    console.log(key);

    if (obj[key] === undefined) {
      obj[key] = true;
      result.push(item);
    }
  }

  return result;
}

function twoSumSolution(arr, x, ans) {
  let i = x + 1;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[x] + arr[i] + arr[j];

    if (sum < 0) {
      i++;
    } else if (sum > 0) {
      j--;
    } else {
      ans.push([arr[x], arr[i], arr[j]]);
      i++;
      j--;
    }
  }
}

//console.log(threeSum([-1, 0, 1, 2, 2, -1, -4, 1, 2]));

function amountOfRainWaterTrapped(arrOfHeights) {
  let n = arrOfHeights.length;
  let maxL = [];
  maxL[0] = arrOfHeights[0];

  // Find max height of bar on left side
  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(arrOfHeights[i], maxL[i - 1]);
  }

  // Find max height of bar on right side
  let maxR = [];
  maxR[n - 1] = arrOfHeights[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    maxR[i] = Math.max(arrOfHeights[i], maxR[i + 1]);
  }

  // Amount of rain water trapped = Math.min(maxL - maxR) - height
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let waterTrapped = Math.min(maxL[i], maxR[i]) - arrOfHeights[i];
    sum = sum + (waterTrapped > 0 ? waterTrapped : 0);
  }

  return sum;
}

//console.log(amountOfRainWaterTrapped([4, 2, 0, 3, 2, 5]));

function findLongestSubstringWithoutRepeatingChars(str) {
  let obj = {};
  let maxLength = 0;
  let longestString = "";
  let i = 0;
  let j = 1;
  while (j < str.length) {
    if (obj[str[j]]) {
      i++;
      j = i;

      if (Object.keys(obj).length > maxLength) {
        maxLength = Object.keys(obj).length;
        longestString = Object.keys(obj).join("");
      }
      obj = {};
    } else {
      obj[str[j]] = true;
      j++;
    }
  }
  return longestString;
}

function findLongestSubstringWithoutRepeatingChars2(str) {
  let i = (j = 0);

  let obj = {};
  let currentWindowSize = 0;
  let maxLength = 0;

  while (j < str.length) {
    if (obj[str[j]] !== undefined && obj[str[j]] >= i) {
      i = obj[str[j]] + 1;
    }
    obj[str[j]] = j;
    currentWindowSize = j - i + 1;
    maxLength = Math.max(currentWindowSize, maxLength);

    j++;
  }
  return maxLength;
}

console.log(findLongestSubstringWithoutRepeatingChars2("abcdeafbdgcbb"));

/********** STRINGS
 * Strings are immutable in JS;
 * If str = 'hello' we cannot do str[0] = 'b' so split the string into array then mutate it and then join it back.
 */
/*************** Length of last word *****************/
function lengthOfLastWord(str) {
  str = str.trim(); // T - O(n)
  str = str.split(" "); // T - O(n); S - O(n)

  return str[str.length - 1].length;
}

function lengthOfLastWord2(str) {
  // Start loop from back
  // Ignore spaces
  // Count characters until you reach a space
  let n = str.length;
  let count = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      count++;
    }
    if (count !== 0 && str[i] === " ") {
      return count;
    }
  }
  return count;
}

function lengthOfLastWord3(str) {
  let n = str.length - 1;
  while (n >= 0) {
    // T - O(n); S - O(1)
    if (str[n] !== " ") {
      break;
    }
    n--;
  }

  // count the character till you reach a space
  let count = 0;
  while (n >= 0) {
    // T - O(n); S - O(1)
    if (str[n] === " ") {
      break;
    }
    count++;
    n--;
  }
  return count;
}

function lengthOfLastWord4(str) {
  let n = str.length - 1;
  let count = 0;

  while (n >= 0) {
    // T - O(n); S - O(1)
    if (str[n] !== " ") {
      count++;
    }
    if (count !== 0 && str[n] === " ") {
      break;
    }
    n--;
  }
  return count;
}

//console.log(lengthOfLastWord4("Hi my name is Ankita  "));

/************** Find words containing a particular character */
function findWordContainingChar(arr, x) {
  let n = arr.length - 1;
  let res = [];

  for (let i = 0; i < n; i++) {
    let word = arr[i];
    if (word.includes(x)) {
      res.push(i);
    }
  }
  return res;
}

function findWordContainingChar2(arr, x) {
  let n = arr.length;
  let res = [];

  // T - O(n*m)
  // S - O(1) because the extra array space used, is to store result of this program and not the logic
  for (let i = 0; i < n; i++) {
    let word = arr[i];
    for (let j = 0; j < word.length; j++) {
      if (word[j] === x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
}

// console.log(findWordContainingChar2(["hi", "how", "here", "are", "you"], "h"));

/********************* Jewels and stones ***********************/
function numOfJewelsInStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        count++;
      }
    }
  }
  return count;
}

function numOfJewelsInStones2(jewels, stones) {
  let count = 0;
  let jSet = new Set(); // Set has unique values; S - O(1) because as per question there can be only English letters and also set cannot have duplicates
  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (jSet.has(stones[i])) {
      // Set.has() -> T - O(1)
      // .includes() -> T - O(n)
      count++;
    }
  }

  return count;
}
// console.log(numOfJewelsInStones2("aA", "aAAbbbb"));

/**************** Frequency of vowels and consonants *****************/

function frequencyOfVowelAndConsonant(str) {
  let obj = {}; // S - O(1) because obj can have max 26 alphabets as keys
  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowelCount = 0;
  let maxConsonantCount = 0;

  for (let i = 0; i < str.length; i++) {
    // T - O(n)
    obj = {
      ...obj,
      [str[i]]: obj.hasOwnProperty(str[i]) ? obj[str[i]] + 1 : 1,
    };
  }

  for (const [key, value] of Object.entries(obj)) {
    // T - O(1) because obj can have max 26 alphabets as keys
    if (vowels.includes(key)) {
      // .includes() here has O(1) time complexity because it searches only in vowels array which has 5 elements.
      maxVowelCount = Math.max(maxVowelCount, value);
    } else {
      maxConsonantCount = Math.max(maxConsonantCount, value);
    }
  }

  return maxVowelCount + maxConsonantCount;
}
//console.log(frequencyOfVowelAndConsonant("ssucceeeessesaaaaaaa"));

/************* No of balanced strings */
function noOfBalancedString(str) {
  let rCount = 0;
  let lCount = 0;
  let balancedCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "R") {
      rCount++;
    } else {
      lCount++;
    }
    if (lCount === rCount) {
      balancedCount++;
      lCount = 0;
      rCount = 0;
    }
  }
  return balancedCount;
}

function noOfBalancedString2(str) {
  let temp = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "R") {
      temp++;
    } else {
      temp--;
    }
    if (temp === 0) {
      count++;
    }
  }
  return count;
}
// console.log(noOfBalancedString2("RLRRRLLLRLRL"));

function reverseString(str, k) {
  str = str.split("");

  // Jump 2k steps
  // Reverse k elements

  for (let i = 0; i < str.length; i += 2 * k) {
    for (let j = 0; j < Math.floor(k / 2); j++) {
      let temp = str[j + i];
      str[j + i] = str[k + i - 1 - j];
      str[k + i - 1 - j] = temp;
    }
  }
  return str.join("");
}
//console.log(reverseString("abcdefg", 2));

/*************** Valid palindrome **************/
function validPalindrome(str) {
  str = str.toLowerCase();
  let newStr = ""; // S - O(n)
  // let reversedString = ""

  for (let i = 0; i < str.length; i++) {
    // T - O(n)
    if (/^[a-z0-9]+$/.test(str[i])) {
      newStr = newStr + str[i];
      // reversedString = str[i] + reversedString
    }
  }

  let mid = Math.floor(newStr.length / 2);
  for (let i = 0; i < mid; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
  // return newStr === reversedString
}

function validPalindrome2(str) {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (!str[i].match(/[a-z0-9]/)) {
      i++;
    } else if (!str[j].match(/[a-z0-9]/)) {
      j--;
    } else if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

//console.log(validPalindrome2("A man, a plan, a canal: Panama"));

function largestOddNum(str) {
  let n = str.length - 1;

  while (n >= 0) {
    if (Number(str[n]) % 2 === 1) {
      return str.substring(0, n + 1);
    }
    n--;
  }
  return "";
}

// console.log(largestOddNum("3542"));

function longestCommonPrefix(arr) {
  let n = arr.length;
  let x = 0;

  while (x < arr[0].length) {
    // T - O(sum of length of all strings)
    // S - O(1)
    let ch = arr[0][x];

    for (let i = 1; i < n; i++) {
      if (ch !== arr[i][x] || x == arr[i].length) {
        return arr[0].substring(0, x);
      }
    }
    x++;
  }
  return arr[0];
}

//console.log(longestCommonPrefix(["flower", "flow", "float"]));

function validAnangram(str1, str2) {
  // sort both strings and check if they are equal
  let s = str1.split("").sort().join(""); // T - O(nlogn); S - O(n)
  let t = str2.split("").sort().join("");

  console.log(s, t);

  return s === t;
}

function validAnangram2(s, t) {
  let obj = {}; // S - O(1) because there can be max 26 chars; T - O(n)
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    obj = {
      ...obj,
      [s[i]]: obj[s[i]] ? obj[s[i]] + 1 : 1,
    };
  }

  for (let i = 0; i < t.length; i++) {
    if (!obj[t[i]] || obj[t[i]] < 0) {
      return false;
    } else {
      obj[t[i]] = obj[t[i]] - 1;
    }
  }
  return true;
}

// console.log(validAnangram2("anagram", "nagaram"));

function isomorphicStrings(s, t) {
  let obj = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]] && !obj2[t[i]]) {
      obj[s[i]] = t[i];
      obj2[t[i]] = s[i];
    } else if (obj[s[i]] !== t[i] || obj2[t[i]] !== s[i]) {
      return false;
    }
  }

  return true;
}

// console.log(isomorphicStrings("ab", "aa"));

function groupAnagrams(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    // T - O(n * mlogm); S - O(n*m)
    let word = arr[i].split("").sort().join(""); // T of sort - O(mlogm)
    if (!obj[word]) {
      obj[word] = [arr[i]];
    } else {
      obj[word].push(arr[i]);
    }
  }
  return Object.values(obj);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

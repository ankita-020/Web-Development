/*************** Check eligibility to vote ****************/ 

// function eligibleToVote(age) {
//   if(age < 1) {
//     console.log('Invalid input'); 
//   } else if (age < 18) {
//     console.log('No, not eligible');
//   } else {
//     console.log('Yes, eligible to vote');
//   }
// }

// eligibleToVote(22)
// eligibleToVote(17)
// eligibleToVote(-1)

/*************** Check even or odd ****************/ 

// function isEvenOrOdd(num) {
//   if(num % 2 === 0) {
//     console.log('Is even');
//   } else {
//     console.log('Is odd');
//   }
// }

// isEvenOrOdd(7777888999)

/****************** Loop ********************/

// for(let i = 5; i < 4; i++) {                 // loop does not run
//   console.log("Hello world");
// }

// for(let i = 0; i > 0; i++) {                    // loop does not run
//   console.log("Hello world");
// }

// function greet(i) {
//   console.log('Namaste! ', i); 
// }

// for(let i = 1; i < 10; i++) {                   
//   greet(i)
// }

/**** print all even no of array */

// let arr = [10, 6, 2, 0, 8, 3, 80, 5]
// let length = arr.length
// for(let i = 0; i < length; i++) {
//   if(arr[i] % 2 === 0) {
//     console.log(arr[i]); 
//   }
// }

/***************** While loop ***********************/

// let i = 0
// while(i < 5) {
//   // Do it here
//   console.log(i);
  

//   i++;
// }

/******* Search for an element in an array and return index, if the element is not present then return -1 ************/

// function searchItem(arr, item) {
//   let index 
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i] === item) {
//       return i
//     }
//   }
//   return -1
// }

// let result = searchItem([10, 5, 2, 3, 6], 3)
// console.log(result);


/******* Write a function that returns the no of negative numbers in array */

// function negativeNumbers(arr) {
//   let count = 0
//   for(let i = 0; i< arr.length; i++) {
//     if(arr[i] < 0) {
//       count++
//     }
//   }
//   return count
// }

// let result = negativeNumbers([10, -2, -3, -4, -5, 6])
// console.log(result);

/******* Write a function that returns the largest no in array */

// function largestNumber(arr) {
// let max = -Infinity              // let max = arr[0] 
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > max)
//       max = arr[i]
//   }
//   return max
// }

// let result = largestNumber([10, 2, 30, 4, 5, 6, 8, 5])
// console.log(result);

/******* Write a function that returns the minimum no in array */

// function minNumber(arr) {
//   let min = Infinity             // let min = arr[0]                       
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < min) {
//       min = arr[i]
//     }
//   }
//   return min
// }

// let result = minNumber([10, 2, 30, 4, 5, 6, 8, 5])
// console.log(result);

/******* Write a function that returns the 2nd largest no in array */

// function secondLargest(arr) {
//   let firstLargest = -Infinity
//   let secondLargest = -Infinity
//   if(arr.length < 2) {
//     return null
//   }
//   for(let i = 0; i<arr.length; i++) {
//     if(arr[i] > firstLargest) {
//       secondLargest = firstLargest
//       firstLargest = arr[i]
//     } else if(arr[i] > secondLargest) {
//       secondLargest = arr[i]
//     }
//   }
//   return secondLargest

  /*** corner cases
   * If array is empty or has only one element
   * If has array has duplicate elements, then 2nd largest should not be same as first largest
   * If array has negative numbers
   **/ 

//}
// let result = secondLargest([100, 2, 30, 4, 5, 6, 8, 5])
// console.log(result);

/************** Double loop ***************/

// function doubleLoop() {
//   for(let i = 0; i<3; i++) {
//     for(let j = 0; j<3; j++) {
//       console.log('i=' +i, 'j=' +j);
//     }
//   }
// }
// doubleLoop()


/************** Star pattern ***************/

// function star1() {
//   for(let i=0; i<4; i++) {
//     let row = ""
//     for(let j = 0; j<10; j++) {
//       row = row + " *"
//     }
//     console.log(row);
//   }
// }
// star1()


// function star2() {
//   for(let i=0; i<5; i++) {
//     let row = ""
//     for(let j = 0; j<=i; j++) {
//       row = row + " *"
//     }
//     console.log(row);
//   }
// }
// star2()


// function star3() {
//   for(let i = 0; i<5; i++) {
//     let row = ""
//     for(let j = 0; j<=i; j++) {
//       row = row + (j+1)
//     }
//     console.log(row);
//   }
// }
// star3()

// function star4() {
//   for(let i=0; i<5; i++) {
//     let row = ""
//     for(let j=0; j<=i; j++) {
//       row = row + (i+1)
//     }
//     console.log(row);
//   }
// }
// star4()


// function star5() {
//   for(let i = 5; i>=1; i--) {
//     let row = ""
//     for(let j=1; j<=i; j++) {
//       row = row + j
//     }
//     console.log(row);
//   }
// }
// star5()

// function star6() {
//   for(let i=5; i>=1; i--) {
//     let row = ""
//     for(let j=0; j<i; j++) {
//       row = row + "*"
//     }
//     console.log(row);
//   }
// }
// star6()

// function star7(){
//   for(let i=0; i<5; i++){
//     let row = ""
//     for(let j=0; j<5-(i+1); j++){
//       row = row + " "
//     }
//     for(let k=0; k<i+1; k++){
//       row = row + '*'
//     }
//     console.log(row);
    
//   }
// }
// star7()

function star8() {
  for(let i=0; i<10; i++) {
    let row = ""
    for(let j=0; j<=i; j++) {
      if(j%2 === 0) {
        row = row + 1
      } else {
        row = row + 0
      }
    }
    console.log(row);
    
  }
}
star8()


//? Day 4: Arrays & Array Methods
//? Session Overview:
//* Introduction to array creation, traversal, and manipulation.
//? Session Practice Questions (5-7):
//! Calculate the sum of elements in an array.
 function sumOfArray(arr) {
     let sum = 0;
     for (let ind = 0; ind < arr.length; ind++) {
         sum += arr[ind];
     }
     return sum;
 }
 console.log(sumOfArray([1, 2, 3, 4, 5]));
 console.log(sumOfArray([10, 20, 30, 40, 50]));
//! replace each and every element in an array with sum of right side elements

 function replaceWithSumOfRight(arr) {
     console.log(arr)
 for (let i = 0; i < arr.length; i++){ // O(n**2)
     let sum = 0;
     for (let ind = i + 1; ind < arr.length; ind++){
         sum += arr[ind];
     }
     arr[i] = sum;
 }
     let sum = 0;
     for (let i = arr.length - 1; i >= 0; i--) {  //O(n)
         sum = sum + arr[i];
         arr[i] = sum - arr[i]
     }
     return arr;
 }

 //[1, 2, 3, 4, 5, 6] => [20, 18, 15, 11, 6, 0];
 console.log(replaceWithSumOfRight([1, 2, 3, 4, 5, 6]));

//! Find the maximum and minimum elements in an array.

 function findMinAndMax(arr) {
   let min = arr[0];
   let max = arr[0];
   for (let ind = 1; ind < arr.length; ind++) {
     if (arr[ind] < min) {
       min = arr[ind];
     }
     if (arr[ind] > max) {
       max = arr[ind];
     }
   }
   console.log(arr);
      return { min, max };
 }

 console.log(
   findMinAndMax(
     Array.from({ length: 5 + Math.floor(Math.random() * 20) }, () =>
       Math.floor(Math.random() * 100)
     )
   )
 );

//! Find the second-largest element in an array.
 function secondLargest(arr) {
   console.log(arr);
   let max = arr[0];
   let secmax = -Infinity;
   for (let ind = 1; ind < arr.length; ind++) {
     if (max < arr[ind]) {
       secmax = max;
       max = arr[ind];
     } else if (arr[ind] < max && arr[ind] > secmax) {
       secmax = arr[ind];
     }
   }
   return { max, secmax };
 }
 console.log(
   secondLargest(
     Array.from({ length: 5 + Math.floor(Math.random() * 20) }, () =>
       Math.floor(Math.random() * 30)
     )
   )
 );
//! Find the number of occurrences of an element in an array.
 function countOccurence(arr, element) {
   console.log(element, arr);
   let count = 0;
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] === element) {
       count++;
     }
   }
   return count;
 }

 console.log(
   countOccurence(
     Array.from({ length: 5 + Math.floor(Math.random() * 20) }, () =>
       Math.floor(Math.random() * 20)
     ),
     Math.floor(Math.random() * 20)
   )
 );

//! Sort an array of integers.
//! Bubble Sort
 function bubbleSort(arr) {
   console.log(arr);
   let flag = true;
   for (let i = 0  ;flag && i < arr.length; i++) {
     flag = false;
     for (let ind = 1; ind < arr.length; ind++) {
       if (arr[ind] < arr[ind - 1]) {
         flag = true;
         let temp = arr[ind];
         arr[ind] = arr[ind - 1];
         arr[ind - 1] = temp;
       }
     }
   }
   console.log(arr);
 }
 bubbleSort(
   Array.from({ length: 5 + Math.floor(Math.random() * 10) }, () =>
     Math.floor(Math.random() * 20)
   )
 );
//! Selection Sort
 function selectionSort(arr) {
   console.log(arr);
   for (let i = 0; i < arr.length; i++) {
     let min = i;
     for (let ind = i + 1; ind < arr.length; ind++) {
       min = arr[ind] < arr[min] ? ind : min;
     }
     if (min != i) {
       let temp = arr[i];
       arr[i] = arr[min];
       arr[min] = temp;
     }
   }
   console.log(arr);
 }

 selectionSort(
   Array.from({ length: 5 + Math.floor(Math.random() * 10) }, () =>
     Math.floor(Math.random() * 20)
   )
 );

//! Insertion Sort
 function insertionSort(arr) {
   console.log(arr);
   for (let i = 0; i < arr.length; i++) {
     let temp = arr[i];
     for (let j = i; j > 0; j--) {
       if (arr[j - 1] > temp) {
         arr[j] = arr[j - 1];
       } else {
         arr[j] = temp;
         break;
       }
     }
     if (arr[0] > temp) {
       arr[0] = temp;
     }
   }
   console.log(arr);
 }
 insertionSort(
   Array.from({ length: 5 + Math.floor(Math.random() * 10) }, () =>
     Math.floor(Math.random() * 20)
   )
 );

//! Rotate an array by one position.
// function rotate(arr) {
//     console.log(arr);
//     let temp = arr[arr.length - 1];
//     for (let ind = arr.length-1; ind > 0; ind--){
//         arr[ind] = arr[ind-1]
//     }
//     arr[0] = temp;
//     console.log(arr)
//     return arr;

// }
// console.log(
//     rotate(
//         Array.from({ length: 5 + Math.floor(Math.random() * 10) }, () =>
//             Math.floor(Math.random() * 20)
//         )
//     )
// );

//! Rotate an array by K position.
 function reverse(arr, start = 0, end = arr.length - 1) {
   while (start < end) {
     let temp = arr[start];
     arr[start] = arr[end];
     arr[end] = temp;
     start++;
     end--;
   }
 }

 function rotatebyk(arr, k) {
  console.log(arr, k);
   k = k % arr.length;
   console.log(k);
   if (k != 0) {
     reverse(arr, 0, arr.length - k - 1);
     reverse(arr, arr.length - k);
     reverse(arr);
   }
   console.log(arr);
 }
// // rotatebyk([1, 2, 3, 4, 5, 6, 7], 55);
// rotatebyk(
//   Array.from({ length: 5 + Math.floor(Math.random() * 10) }, () =>
//     Math.floor(Math.random() * 20)
//   ),
//   Math.floor(Math.random() * 100)
// );
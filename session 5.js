//? Day 5: Searching
//? Session Overview:
//* Introduce linear and binary search techniques.
//! Session Practice Questions (5-7):

//! Implement a linear search to find an element in an array.
 function linearSearch(arr, element) {
   console.log(arr);
   console.log(element);
   for (let ind = 0; ind < arr.length; ind++) {
     if (arr[ind] === element) {
       return ind;
       }

   }
   return -1;
 }
 console.log(
   linearSearch(
     Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
     Math.floor(Math.random() * 100)
   )
 );
//! Implement a binary search on a sorted array.
 function binarySearch(arr, element) {
   console.log(arr);
   console.log(element);
   let start = 0;
   let end = arr.length - 1;
   let count = 0;
   while (start <= end) {
     count++;
     let mid = Math.floor((start + end) / 2);
     console.log(mid);
     if (arr[mid] === element) return { index: mid, count };
     else if (arr[mid] > element) end = mid - 1;
     else start = mid + 1;
   }
   return { index: -1, count };
 }
 console.log(
   binarySearch(
     Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000)).sort(
       (a, b) => a - b
     ),
     Math.floor(Math.random() * 10000)
   )
 );
//! Find the first and last occurrence of a target in an array.
 function firstAndLastOcc(arr, element) {
   console.log(arr);
   console.log(element);
   let firstIndex = -1;
   let lastIndex = -1;

   let start = 0;
   let end = arr.length - 1;
      while (start <= end) {
     let mid = Math.floor((start + end) / 2);
     if (arr[mid] == element) {
       firstIndex = mid;
       end = mid - 1;
     } else if (arr[mid] > element) end = mid - 1;
     else start = mid + 1;
   }
   if (firstIndex !== -1) {
     start = firstIndex;
     end = arr.length - 1;
     while (start <= end) {
       let mid = Math.floor((start + end) / 2);
       if (arr[mid] == element) {
         lastIndex = mid;
         start = mid + 1;
       } else if (arr[mid] > element) end = mid - 1;
       else start = mid + 1;
     }
   }
   return {
     firstIndex,
     lastIndex,
   };
 }
 console.log(
   firstAndLastOcc(
     Array.from({ length: 150 }, () => Math.floor(Math.random() * 10)).sort(
       (a, b) => a - b
     ),
     Math.floor(Math.random() * 10)
   )
 );
//! Search for a target in a rotated sorted array.
 function searchRotated(arr, element) {
     console.log(arr
         .map((x) => (x + "").padStart(2)));
     console.log(arr
         .map((_, i) => (i + "").padStart(2)));
   console.log(element);

   let start = 0;
   let end = arr.length - 1;
   while (start <= end) {
     let mid = Math.floor((start + end) / 2);
     console.log(mid);
     if (arr[mid] === element) {
       return mid;
     }
     if (arr[start] <= arr[mid]) {
       if (arr[start] <= element && element < arr[mid]) end = mid - 1;
       else start = mid + 1;
     } else {
       if (arr[mid] < element && element <= arr[end]) {
         start = mid + 1;
       } else end = mid - 1;
     }
   }
   return -1;
 }

 console.log(
   searchRotated(
     [
       ...Array.from({ length: 5 }, () =>
         Math.floor(30 + Math.random() * 30)
       ).sort((a, b) => a - b),
              ...Array.from({ length: 5 }, () => Math.floor(Math.random() * 30)).sort( 
         (a, b) => a - b
       ),
     ],
     Math.floor(Math.random() * 60)
   )
 );
//! Count occurrences of a target using binary search.
 const { firstIndex, lastIndex } = firstAndLastOcc(
   Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).sort(
     (a, b) => a - b
   ),
   Math.floor(Math.random() * 10)
 );
 console.log(firstIndex == -1 ? 0 : -firstIndex + lastIndex + 1);

//! Find the index where an element should be inserted in a sorted array.
 function insertIndex(arr, element) {
   console.log(arr);
   console.log(element);
   let start = 0;
   let end = arr.length - 1;
   while (start <= end) {
     let mid = Math.floor((start + end) / 2);
     if (arr[mid] == element) return mid;
     if (arr[mid] < element) start = mid + 1;
     else end = mid - 1;
   }
      console.log(start, end);
   return start;
 }
 /*
 console.log(insertIndex([0, 1, 2, 3, 4 , 5 , 6 , 7, 8 ,  9]));
// */
 console.log(insertIndex([1, 3, 5, 7, 10, 14, 17, 22, 45, 56], 6)); 
 console.log(insertIndex([1, 3, 5, 7, 10, 14, 17, 22, 45, 56], -5)); // 0
 console.log(insertIndex([1, 3, 5, 7, 10, 14, 17, 22, 45, 56], 66)); // 10
 console.log(insertIndex([1, 3, 5, 7, 10, 14, 17, 22, 45, 56], 23)); // 8
 console.log(insertIndex([1, 3, 5, 7, 10, 14, 17, 22, 45, 56], 13)); // 5

//! Find the peak element in a mountain array.

 function findPeak(arr) {
   let start = 0;
   let end = arr.length - 1;
   while (start <= end) {
     let mid = Math.floor((start + end) / 2);
     if (arr[mid] >= arr[mid + 1] && arr[mid] >= arr[mid - 1]) return mid;
     if (arr[mid] < arr[mid + 1]) {
       start = mid + 1;
     } else {
       end = mid - 1;
     }
   }
   return start;
 }

 console.log(findPeak([1, 3, 5, 7, 10, 14, 13, 12, 9, 7, 5, 4, 3, 2, 1])); 

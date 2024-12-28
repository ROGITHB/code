  //? Day 6: Sorting
//? Session Overview:
//* Introduce sorting algorithms and their use cases, including bubble sort, selection sort, and insertion sort.
//? Session Practice Questions (5-7):
//! Implement bubble sort on an array of integers.
// function bubbleSort(arr) {
//     console.log(arr);
//   for (let i = 0; i < arr.length; i++)
//     for (let ind = 1; ind < arr.length; ind++) {
//         if (arr[ind - 1] > arr[ind]) {

//         arr[ind - 1] = arr[ind - 1] + arr[ind];
//         arr[ind] = arr[ind - 1] - arr[ind];
//         arr[ind - 1] = arr[ind - 1] - arr[ind];
//       }
//     }
//   console.log(arr);
// }

// bubbleSort([5, 1, 2, 3, 4]);
//! Sort an array using selection sort.
// function selectionSort(arr) {
//   console.log(arr);
//   let count = 0;
//   for (let ind = 0; ind < arr.length; ind++) {
//     let minInd = ind;
//     for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
//       if (arr[ind1] < arr[minInd]) {
//         minInd = ind1;
//       }
//     }
//     if (minInd !== ind) {
//       count++;
//       [arr[minInd], arr[ind]] = [arr[ind], arr[minInd]];
//     }
//   }
// }
// const arr = [74, 44, 15, 12, 23, 10, 90];
// selectionSort(arr);
// console.log(arr);

//! Implement insertion sort on an array of integers.
// function insertionSort(arr) {
//   console.log(arr);
//   for (let ind = 1; ind < arr.length; ind++) {
//     let value = arr[ind];
//     let i = ind - 1;
//     for (i = ind - 1; i >= 0; i--) {
//       if (value < arr[i]) {
//         arr[i + 1] = arr[i];
//       } else {
//         break;
//       }
//     }
//     arr[i + 1] = value;
//   }
//   console.log(arr);
// }
// insertionSort([5, 2, 3, 4, 1]);
//! Sort an array of integers in descending order.
// function insertionSortDesc(arr) {
//   console.log(arr);
//   for (let ind = 1; ind < arr.length; ind++) {
//     let value = arr[ind];
//     let i = ind - 1;
//     for (i = ind - 1; i >= 0; i--) {
//       if (value > arr[i]) {
//         arr[i + 1] = arr[i];
//       } else {
//         break;
//       }
//     }
//     arr[i + 1] = value;
//   }
//   console.log(arr);
// }
// insertionSortDesc([5, 2, 3, 4, 1]);
// function selectionSortDesc(arr) {
//   console.log(arr);
//   let count = 0;
//   for (let ind = 0; ind < arr.length; ind++) {
//     let minInd = ind;
//     for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
//       if (arr[ind1] > arr[minInd]) {
//         minInd = ind1;
//       }
//     }
//     if (minInd !== ind) {
//       count++;
//       [arr[minInd], arr[ind]] = [arr[ind], arr[minInd]];
//     }
//   }
// }
// const arr = [74, 44, 15, 12, 23, 10, 90];
// selectionSortDesc(arr);
// console.log(arr);

// function bubbleSortDesc(arr) {
//     console.log(arr);
//   for (let i = 0; i < arr.length; i++)
//     for (let ind = 1; ind < arr.length; ind++) {
//         if (arr[ind - 1] < arr[ind]) {
//         arr[ind - 1] = arr[ind - 1] + arr[ind];
//         arr[ind] = arr[ind - 1] - arr[ind];
//         arr[ind - 1] = arr[ind - 1] - arr[ind];
//       }
//     }
//   console.log(arr);
// }

// bubbleSortDesc([5, 1, 2, 3, 4]);

// console.log(
//   Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)).sort(
//     (val1, val2) => {
//       if (val1 > val2) return -1;
//       return 1;
//     }
//   )
// );

// ! recursion Example

// function multiply(num1, num2) {
//     if(num1 == 0 || num2 == 0){
//         return 0;
//     }
//     return num1 + multiply(num1, num2 - 1);
// }

// console.log(multiply(10, 5))

//! Sort an array using merge sort.
// function merge(arr, start, mid, end) {
//   let result = [];
//   let ind1 = start;
//   let ind2 = mid;
//   while (ind1 < mid && ind2 < end)
//     if (arr[ind1] < arr[ind2]) result[result.length] = arr[ind1++];
//     else result[result.length] = arr[ind2++];
//   while (ind1 < mid) result[result.length] = arr[ind1++];
//   while (ind2 < end) result[result.length] = arr[ind2++];
//   for (let ind = 0; ind < result.length; ind++) arr[start + ind] = result[ind];
// }
// const floor = (val) => (val < 0 ? val - (val % 1) - 1 : val - (val % 1));
// function mergeSort(arr, start = 0, end = arr.length) {
//   if (end - start <= 1) return arr;
//   const mid = floor((start + end) / 2);
//   mergeSort(arr, start, mid);
//   mergeSort(arr, mid, end);
//   return merge(arr, start, mid, end);
// }

// const arr = Array.from({ length: 10 }, () => {
//   const x = Math.floor(Math.random() * 100);
//   if (Math.random() < 0.5) {
//     return -x;
//   }
//   return x;
// });

// console.log(arr);
// mergeSort(arr);
// console.log(arr);

//! Sort an array of 0s, 1s, and 2s (Dutch National Flag problem).
function sortDutchNational(arr) {
    console.log(arr);
    let start = 0;
    let end = arr.length - 1;
    let ind = 0;
    while (ind < end) {
      if (arr[ind] == 0) {
        // swap ind with start and increase ind
        [arr[ind], arr[start]] = [arr[start], arr[ind]];
        start++;
        ind++;
      }
      else if (arr[ind] == 2) {
        // swap ind with end and decrease end
        [arr[ind], arr[end]] = [arr[end], arr[ind]];
        end--;
      } else {
        ind++;
      }
    }
    console.log(arr);
    return arr;
  }
  
  console.log(sortDutchNational([1, 1, 0, 1, 0, 0, 2, 0, 2, 2, 2, 1, 0, 1, 0]));
  
  // todo Post-Session Practice Questions (10):
  // todo Find the median of a sorted array.
  // todo Sort an array of strings by their lengths.
  // todo Implement quicksort on an array of integers.
  // todo Sort a nearly sorted array (where each element is at most k places away from its target position).
  // todo Perform a bucket sort on an array of decimals.
  // todo Sort an array of integers by frequency of elements.
  // todo Sort an array of strings lexicographically.
  // todo Sort an array using heap sort.
  // todo Sort a matrix row-wise and column-wise.
  // todo Find the kth smallest element in an array.
  // todo Sort an array containing negative and positive numbers, with negatives coming first.
  
//Selectionsort
const n = userInput[0];
  const arr = userInput[1].split(" ").map(Number);
  function selectionSort(arr) {
   let count = 0;
   for (let ind = 0; ind < arr.length; ind++) {
     let minInd = ind;
     for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
       if (arr[ind1] < arr[minInd]) {
         minInd = ind1;
       }
     }
     if (minInd !== ind) {
       count++;
       [arr[minInd], arr[ind]] = [arr[ind], arr[minInd]];
     }
     console.log(arr.join(" ")) 
   }
 }
 selectionSort(arr)

 //Counting sort
 function CountingSort(arr) {
    for (let ind = 1; ind < arr.length; ind++) {
     let value = arr[ind];
     let i = ind - 1;
     for (i = ind - 1; i >= 0; i--) {
       if (value < arr[i]) {
         arr[i + 1] = arr[i];
       } else {
         break;
       }
     }
     arr[i + 1] = value;
   }
   console.log(arr.join(" "));
 }
  const n = userInput[0];
  const arr = userInput[1].split(" ").map(Number);
 CountingSort(arr);


 //Insertion sort
 const n = userInput[0];
 const arr = userInput[1].split(" ").map(Number);
 function insertionSort(arr) {
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
     console.log(arr.join(" "));
   }
 }
 insertionSort(arr)

//QuickSort
   const n = userInput[0];
   const arr = userInput[1].split(" ").map(Number);
   function quickSort(arr) {
   
   for (let ind = 1; ind < arr.length; ind++) {
     let value = arr[ind];
     let i = ind - 1;
     for (i = ind - 1; i >= 0; i--) {
       if (value < arr[i]) {
         arr[i + 1] = arr[i];
       } else {
         break;
       }
     }
     arr[i + 1] = value;
   }
   console.log(arr.join(" "));
 }
 quickSort(arr)
 //BucketSort
 function BucketgSort(arr) {
    for (let ind = 1; ind < arr.length; ind++) {
     let value = arr[ind];
     let i = ind - 1;
     for (i = ind - 1; i >= 0; i--) {
       if (value < arr[i]) {
         arr[i + 1] = arr[i];
       } else {
         break;
       }
     }
     arr[i + 1] = value;
   }
   console.log(arr.join(" "));
 }
  const n = userInput[0];
  const arr = userInput[1].split(" ").map(Number);
  BucketgSort(arr);
  //Radix Sort
  function RadixSort(arr) {
    for (let ind = 1; ind < arr.length; ind++) {
     let value = arr[ind];
     let i = ind - 1;
     for (i = ind - 1; i >= 0; i--) {
       if (value < arr[i]) {
         arr[i + 1] = arr[i];
       } else {
         break;
       }
     }
     arr[i + 1] = value;
   }
   console.log(arr.join(" "));
 }
  const n = userInput[0];
  const arr = userInput[1].split(" ").map(Number);
  RadixSort(arr);
  //Bubble sort
  function BubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
       for (var j = 0; j < (arr.length - i - 1); j++) {
           if (arr[j] > arr[j + 1]) {
               var temp = arr[j];
               arr[j] = arr[j + 1];
               arr[j + 1] = temp;
           }
       }
       console.log(arr.join(" "));
   }

}
var n = userInput[0];
var arr = userInput[1].split(" ").map(Number);
//Merge Sort
function merge(arr, left, middle, right) {
    let l1 = middle - left + 1;
    let l2 = right - middle;
    let arr1 = new Array(l1);
    let arr2 = new Array(l2);
    for (let i = 0; i < l1; ++i) {
        arr1[i] = arr[left + i];
    }
    for (let i = 0; i < l2; ++i) {
        arr2[i] = arr[middle + 1 + i];
    }
    let i = 0,
        j = 0,
        k = left;
    while (i < l1 && j < l2) {
        if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            ++i;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }
    while (i < l1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while (j < l2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}
function mergeSort(arr, left, right) {
    if (left >= right) {
        return;
    }
    let middle = left + parseInt((right - left) / 2);
    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);
    merge(arr, left, middle, right);
}
const n = userInput[0];
const arr = userInput[1].split(" ").map(Number);
mergeSort(arr, 0, arr.length - 1);
console.log(arr.join(" "));


 // diamond pattern
 let rows = Number(userInput[0]);
    for (let i = 1; i <= rows; i++) {
    let output = '';
    for (let j = 1; j <= rows - i; j++) {
        output += ' ';
  }
    for (let k = 1; k <= 2 * i - 1; k++) {
        output += '*';
    }
    console.log(output);
}

    for (let i = rows - 1; i >= 1; i--) {
    let output = '';
    for (let j = 1; j <= rows - i; j++) {
        output += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        output += '*';
    }
    console.log(output);
}
//! Print a hollow square pattern.
let num = userInput[0]
 function hollowSquare(num) {
   for (let row = 0; row < num; row++) {
     const rowValues = [];
     for (let col = 0; col < num; col++) {
       if (
         row == 0 ||
         col == 0 ||
         row == num - 1 ||
         col == num - 1 ||
         row == col ||
         row >= num - 1 - col
       ) {
         rowValues.push("*");
       } else {
         rowValues.push(" ");
       }
     }
     console.log(rowValues.join(" "));
   }
 }

 hollowSquare(num);

 
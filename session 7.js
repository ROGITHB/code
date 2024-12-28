//? Day 7: Recursion
//? Session Overview:
//* Understand recursive approaches and problems solvable with recursion.
//? Session Practice Questions (5-7):
//! Print numbers from 1 to N using recursion.
function printTillN(n) {
     for (let val = 1; val <= n; val++){
         console.log(val);
     }
  
    if (n < 1) {
      return;
    }
    console.log(n);
    printTillN(n - 1);
    console.log(n);
  }
   printTillN(5);
  //! Calculate the factorial of a number recursively.
  
  function factorial(n) {
     let fact = 1;
  
     for (let i = 1; i <= n; i++){
         fact = fact * i;
     }
     return fact;
  
    if (n < 2) return 1;
    let x = factorial(n - 1);
    console.log(x);
    return x * n;
  }
   console.log(factorial(15));
  
  //! Find the nth Fibonacci number using recursion.
  
  // function finbonacciSequence(n) {
  //   let fibo = [];
  //   if (n >= 1) fibo.push(0);
  //   if (n >= 2) fibo.push(1);
  //   if (n >= 3) {
  //     for (let i = 2; i < n; i++) {
  //       fibo.push(fibo[i - 1] + fibo[i - 2]);
  //     }
  //   }
  //   return fibo;
  // }
  // console.log(finbonacciSequence(10));
  // function printFibonacci(n) {
  //   let a = 0,
  //     b = 1,
  //     c;
  //   console.log(a);
  //   console.log(b);
  //   for (let i = 2; i < n; i++) {
  //     c = a + b;
  //     console.log(c);
  //     a = b;
  //     b = c;
  //   }
  // }
  // printFibonacci(10)
  
  // function fibonacci(n) {
  //   if (n < 2) return n;
  //   return fibonacci(n - 1) + fibonacci(n - 2);
  // }
  
  // console.log(fibonacci(5));
  // function printRow(rowNo, numOfCols, currCol, arr) {
  //   if (currCol == numOfCols) {
  //     console.log(arr.join(""));
  //     return;
  //   }
  //   if (
  //     currCol == rowNo ||
  //     currCol == 0 ||
  //     rowNo == 0 ||
  //     currCol == numOfCols - 1 ||
  //     rowNo == numOfCols - 1
  //   ) {
  //     arr.push("*");
  //   } else {
  //     arr.push(" ");
  //   }
  //   printRow(rowNo, numOfCols, currCol + 1, arr);
  // }
  
  // function print(n) {
  //   if (n < 1) return;
  //   print(n - 1);
  //   printRow(n - 1, n, 0, []);
  // }
  // print(5);
  
  //! Calculate the sum of digits of a number recursively.
  // function sumOfDigits(num) {
  //   if (num < 0) return NaN;
  //   if (num < 10) return num;
  //   return (num % 10) + sumOfDigits(Math.floor(num / 10));
  // }
  
  // console.log(sumOfDigits(12345));
  //! Check if a string is a palindrome using recursion.
  function isPalindrome(str, start = 0, end = str.length - 1) {
    if (start >= end) return true;
    if (str[start] != str[end]) return false;
    return isPalindrome(str, start + 1, end - 1);
    //   let start = 0;
    //   let end = str.length - 1;
    //   while (start < end) {
    //     if (str[start] != str[end]) {
    //       return false;
    //     }
    //     start++;
    //     end--;
    //   }
    //   return true;
  }
  // console.log(isPalindrome("madam"));
  //! Implement a recursive binary search.
  function search(arr, target, start = 0, end = arr.length - 1) {
    console.log(arr, target);
    console.log(start, end);
  
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) return search(arr, target, start, mid - 1);
    else return search(arr, target, mid + 1, end);
  }
  
  // console.log(
  //   search(
  //     Array.from({ length: 10 }, (_, i) => Math.floor(Math.random() * 100)).sort(
  //       (a, b) => a - b
  //     ),
  //     Math.floor(Math.random() * 100)
  //   )
  // );
  //! Generate all subsets of a given set.
  // [1, 2, 3]
  // []
  // [1]
  // [1,2]
  // [1,3]
  // [1,2,3]
  // [2]
  // [2,3]
  // [3]
  
  function generateSubsets(arr) {
    //   let noOfSubsets = 1 << arr.length;
    let subsets = [];
    //   for (let val = 0; val < noOfSubsets; val++) {
    //     let subset = [];
    //     for (let ind = 0; ind < arr.length; ind++) {
    //       if (val & (1 << ind)) {
    //         subset.push(arr[ind]);
    //       }
    //     }
    //     subsets.push(subset);
    //   }
  
    function findAllSubsets(index, subset) {
      if (index == arr.length) {
        subsets.push(subset);
        return;
      }
      findAllSubsets(index + 1, subset);
      findAllSubsets(index + 1, [...subset, arr[index]]);
    }
    findAllSubsets(0, []);
    return subsets.map((sub) => `[${sub.join()}]`);
  }
  console.log(generateSubsets([1, 2, 3, 4, 5]).join("\n"));
  // todo Post-Session Practice Questions (10):
  // todo Solve the Tower of Hanoi problem.
  // todo Reverse a string recursively.
  // todo Count the number of ways to climb stairs (1 or 2 steps at a time).
  // todo Find all permutations of a given string.
  // todo Compute the power of a number recursively.
  // todo Find the GCD of two numbers using the Euclidean algorithm.
  // todo Generate all possible binary strings of length N.
  // todo Find the nth Catalan number.
  // todo Flatten a nested list using recursion.
  // todo Print all paths from top-left to bottom-right in an N x M matrix.
  
  
  function longestNonRepeatingSubstring(str) {
      let longest = ""
      function findLongest(index, curr) {
          if (longest.length < curr.length) longest = curr;
          if (index == str.length) return;
          if (curr.includes(str[index])) {
              curr = curr.substring(curr.indexOf(str[index]) + 1)
          };
          findLongest(index+1, curr + str[index])
      }
      findLongest(0 , "")
      return longest;
  }
  
  console.log(
      longestNonRepeatingSubstring("pwwkew")
  )
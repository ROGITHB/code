//? Day 2: Maths & Patterns
//* Session Overview:
//* Explore fundamental math problems and pattern creation.
//? Session Practice Questions (5-7):
//* Sum of digits in a number //completed in last session.
//! Calculate the factorial of a number.

// What is factorial?
// N => N! => n*n-1 * n-2 * .... * 2 * 1
 let n = 5;
 let product = 1;
 for (let value = n; value > 0; value--) {
   product = product * value;
 }
 console.log(product);
 let product1 = 1;
 while (n > 0) {
   product1 = product1 * n;
   n--;
 }
 console.log(product1);
//! Generate the Fibonacci sequence up to N terms.
// 1 2 3 4 5 6 7 8  9  10 11 12
// 0 1 1 2 3 5 8 13 21 34 55 89

 function fobonacciSequence(n) {
    let first = 0;
    let second = 1;
    for (let i = 0; i < n; i++){
         let temp = first + second;
         console.log(first);
         first = second;
         second = temp;
     }

 }
 console.log(fobonacciSequence(15));
 console.log(fobonacciSequence(15));
 console.log(fobonacciSequence(10));
 console.log(fobonacciSequence(9));
 console.log(fobonacciSequence(6));
 console.log(fobonacciSequence(1));
 console.log(fobonacciSequence(2));
 console.log(fobonacciSequence(0));

//! print the N-th value in Fibonacci sequence. // Number of Ways to Climb Stairs
 function nThFibo(n) {
   const fibo = [0, 1, 1];
   for (let i = 2; i <= n; i++) {
     fibo.push(fibo[i] + fibo[i - 1]);
   }

   return fibo[n + 1];
 }

 function nThFibo1(n) {
     let first = 0;
     let second = 1;
     for (let i = 0; i < n; i++) {
       let temp = first + second;
       first = second;
       second = temp;
     }
     return second;
 }
 console.log(nThFibo1(1));
 console.log(nThFibo1(2));
 console.log(nThFibo1(3));
 console.log(nThFibo1(4));
 console.log(nThFibo1(5));
 console.log(nThFibo1(6));
 console.log(nThFibo1(7));

//! Check if a number is a palindrome.
// 121 => 121 => Palindrome
 function isPalindrome(num) {
   let temp = num;
   let rev = 0;
   while (temp > 0) {
     let lastDigit = temp % 10;
     rev = rev * 10 + lastDigit;
    temp = Math.floor(temp / 10);
   }
    console.log(num, rev);
       return rev == num;
 }
 console.log(isPalindrome(12345));
 console.log(isPalindrome(12321));
 console.log(isPalindrome(1221));
//! Check if a number is prime.(Time Complexity and Algorithms)(3-4)
// ? What is Prime Number?
// * A number which is only divisible by one and itself;

// function isPrime(num) {
//   let count = 0;
//   for (let fact = 2; fact < num; fact++) {
//     count++;
//     if (num % fact == 0) {
//       return [false, count];
//     }
//   }
//   return [true, count];
// }

// function isPrime1(num) {
//   let count = 0;
//   for (let fact = 2; fact < num / 2; fact++) {
//     count++;
//     if (num % fact == 0) {
//       return [false, count];
//     }
//   }
//   return [true, count];
// }

// function isPrime2(num) {
//   let count = 0;
//   for (let fact = 2; fact * fact < num; fact++) {
//     count++;
//     if (num % fact == 0) {
//       return [false, count];
//     }
//   }
//   return [true, count];
// }

// function isPrime3(num) {
//   let count = 0;
//   if (num == 2) return [true, count];
//   if (num % 2 == 0) return [false, count];
//   for (let fact = 3; fact * fact <= num; fact += 2) {
//     count++;
//     if (num % fact == 0) {
//       return [false, count];
//     }
//   }
//   return [true, count];
// }

// console.log(isPrime3(101));
// console.log(isPrime3(103));
// console.log(isPrime3(105));
// console.log(isPrime3(107));
// console.log(isPrime3(109));
// console.log(isPrime3(111));
// console.log(isPrime3(113));
// console.log(isPrime3(7465837564131313));

//! Print a hollow square pattern.
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

 hollowSquare(10);

//! Print a right-angled triangle pattern of asterisks.

 function rightAngledTriangle(num) {
   for (let row = 0; row < num; row++) {
     const rowValues = [];
     for (let col = 0; col < num; col++) {
       if (col > row) {
         rowValues.push(" ");
       } else rowValues.push("*");
     }
     console.log(rowValues.join(" "));
   }
 }
 rightAngledTriangle(5);





 // TODO Find the LCM of two numbers.
// TODO Generate a pyramid pattern of numbers.
// TODO Calculate the GCD of two numbers.
// TODO Print an inverted triangle pattern of stars.
// TODO Check if two numbers are coprime.
// TODO Print a diamond pattern of stars.
// TODO Check if a number is an Armstrong number.
// TODO Print the Pascal’s triangle up to N rows.
// TODO Find all divisors of a number.
// TODO Print a checkerboard pattern.
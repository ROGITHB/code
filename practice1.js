// // // Calculate the difference between two integers
function Differnce(a, b) {
    return Math.abs(a - b);
  }
   console.log(Differnce(4,5));
  
  // // // Check if a number is even or odd.
  // // var Even = [];
  // // function OddEven(arr) {
  // //   for (var i = 0; i < arr.length; i++) {
  // //     if (arr[i] % 2 === 0) {
  // //       Even.push(arr[i]);
  // //     }
  // //   }
  // //   return Even;
  // // }
  // // console.log(OddEven([1, 2, 3, 4, 5]));
  
  // // var Even = [];
  // // var Odd = [];
  // // function odd(arr) {
  // //   for (var i = 0; i < arr.length; i++) {
  // //     if (arr[i] % 2 === 0) {
  // //       Even.push(arr[i]);
  // //     } else if (arr[i] % 2 !== 0) {
  // //       Odd.push(arr[i]);
  // //     }
  // //   }
  // //   return { Even, Odd };
  // // }
  // // console.log(odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  
  var EvenNumber = [];
  var OddNumber = [];
  function EvenOdd(arr) {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] % 2 === 0) {
        EvenNumber.push(arr[index]);
      } else if (arr[index] % 2 !== 0) {
        OddNumber.push(arr[index]);
      }
    }
    return { EvenNumber, OddNumber };
  }
  console.log(EvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  
  var arr = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        console.log("Even");
      }  if(arr[i]%2!==0) {
        console.log("Odd");
      }
    }
    return "Even","Odd"
  };
  console.log(arr([2,1]));
  
  // Calculate the perimeter of a rectangle.
  function Perimeter(length, width) {
    let Perimeter = 2 * (length + width);
    return Perimeter;
  }
  console.log(Perimeter(2, 2));
   console.log(Perimeter(3, 6));
  // Find the largest of four numbers.
  function largest(num1, num2, num3, num4) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    num4 = Number(num4);
    const largest = num1 > num2
    ? (num1 > num3
        ? (num1 > num4 ? num1 : num4)
        : (num3 > num4 ? num3 : num4))
    : (num2 > num3
        ? (num2 > num4 ? num2 : num4)
        : (num3 > num4 ? num3 : num4));
  
   return largest
  }
  console.log(largest(5,10,15,20));
  
  // Find the smallest of four numbers.
  function smallest(num1, num2, num3, num4) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    num4 = Number(num4);
    let smallest =
      num1 < num2
        ? num1 < num3
          ? num1 < num4
            ? num1
            : num4
          : num3 < num4
          ? num3
          : num4
        : num2 < num3
        ? num2 < num4
          ? num2
          : num4
        : num3 < num4
        ? num3
        : num4;
    return smallest;
  }
  console.log(smallest(5, 10, 4, 5));
  
  // Calculate the average of three numbers.
  function Average(num1, num2, num3) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    let Average = (num1 + num2 + num3) / 3;
    return Average;
  }
  console.log(Average(10, 20, 30));
  
  // Identify if a number is divisible by both 3 and 5.
  function divisible(num) {
    num = Number(num);
    if (num % 3 === 0 && num % 5 === 0) {
      return `${num} is divisble by both 3 And 5`;
    } else {
      return `${num} is not divisible by both 3 and 5.`;
    }
  }
  console.log(divisible(15));
  
  // Count the number of vowels in a string.
  function CountVowels(Str){
    var vowels="aeiouAEIOU"
    var count=0
    for ( var i = 0; i < Str.length;i++) {
     if(vowels.includes(Str[i])){
       count++
    }
  }
  return `the number of vowels in a string:${count}`
  }
  console.log(CountVowels("Hello World"));
  
  // Determine if a character is an uppercase letter
  function isUpperCase(char) {
    return char >= 'A' && char <= 'Z';
  }
  console.log(isUpperCase('A')); // true
  console.log(isUpperCase('a')); // false
  console.log(isUpperCase('Z')); // true
  console.log(isUpperCase('z')); // false
  console.log(isUpperCase('1')); // false
  
  // Print the reverse of a string.
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  
  //Find the square of a number.
  
  function squarenumber(num){
    num=Number(num)
    let squarenumber=num*num
    return squarenumber
  }
  console.log(squarenumber(2));
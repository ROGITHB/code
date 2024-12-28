// Determine if a number is positive or negative
function ChecknNumber(num) {
    if (typeof num === "number") {
      return num < 0 ? "Negative" : num > 0 ? "Postive" : num == 0 ? "Zero" : num;
    }
    return -1;
  }
  console.log(ChecknNumber(0)); 
  console.log(ChecknNumber(1));
  console.log(NaN===5);
  console.log(NaN==undefined);
 
 // find the sum of two integer
  function FindSum(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
  }
  console.log(FindSum(1, 2));
  console.log(FindSum(2, "3"));
 
 // identify the Maximum and Minimun of three numbers
  function minAndMax(num1, num2, num3) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    let min =
      num1 < num2 ? (num1 < num3 ? num1 : num3) : num2 < num3 ? num2 : num3;
    let max =
      num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;
 
    return [`Min:${min},Max:${max}`];
  }
  console.log(minAndMax(1,2,3));
  console.log(minAndMax(1,1,1));
  console.log(minAndMax(1,-2,0))
  console.log(minAndMax(-1,-2,-3));
 
  function MinMidMax(num1, num2, num3) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    let min =
      num1 < num2 ? (num1 < num3 ? num1 : num3) : num2 < num3 ? num2 : num3;
    let max =
      num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;
    let mid = num1 + num2 + num3 - max - min;
     num1 !== min && num1 !== max
       ? num1
       : num2 !== min && num2 !== max
       ? num2
       : num3;
 
    return {
      min,
      mid,
      max,
    };
  }
 
  console.log(MinMidMax(1, 2, 3));
  console.log(MinMidMax(1, 1, 1));
 
   // count the number of digits in a number
 function Countdigits(num) {
   num = Number(num);
   if (isNaN(num)) {
     return "Invalid";
   }
   if (num < 0) {
     num = -num;
   }
   if (num == 0) return 1;
   num = parseInt(num);
   let count = 0;
   while (num > 0) {
     count++;
     num = parseInt(num / 10);
   }
   return count;
 }
 console.log(Countdigits(123445));
 console.log(Countdigits("1233400000000000000000000000"));//trailing Zero example
 console.log(Countdigits("000000008976"));//leading zero example
 console.log(Countdigits(0));
 console.log(Countdigits(-100001));
 function Sumdigits(num) {
   num = Number(num);
   if (isNaN(num)) {
     return "Invalid";
   }
   if (num < 0) {
     num = -num;
   }
   num = parseInt(num);
   let total = 0;
   while (num > 0) {
     total += num % 10;
     num = parseInt(num / 10);
   }
   return total;
 }
 console.log(Sumdigits(123445));
 console.log(Sumdigits("1233400000000000000000000000")); //trailing Zero example
 console.log(Sumdigits("000000008976")); //leading zero example
 console.log(Sumdigits(0));
 console.log(Sumdigits(-100001));
 
 // ! Check if a string contains only alphabets.
 function StringAlphabets(str) {
   if (str == "") return false;
   for (let ind = 0; ind < str.length; ind++)
     if (
       !(
         (str[ind] >= "a" && str[ind] <= "z") ||
         (str[ind] >= "A" && str[ind] <= "Z")
       )
     )
       return "False";
   return "True";
 }
 console.log(StringAlphabets("Hello"));
 console.log(StringAlphabets(""));
 
 // ! Calculate the area of a circle with a given radius.
 function areaOfcircle(radius) {
   return (Math.PI * radius * radius).toFixed(2);
 }
 console.log(areaOfcircle(5));
 
 // Check if a character is a vowel
 function isVowel(char) {
   char = char.charAt(0).toLowerCase();
   return (
     char == "a" ||
     char == "e" ||
     char == "i" ||
     char == "o" ||
     char == "u" 
     //  char == "A" ||
     //  char == "E" ||
     //  char == "I" ||
     //  char == "O" ||
     //  char == "U"
   );
 }
  console.log(isVowel("a"));
 
 function Vowels(char) {
   if (!char || char.length !== 1) {
     return "False";
   }
   const vowels = "aeiouAEIOU";
   return vowels.includes(char);
 }
 
 console.log(Vowels("a"));
 console.log(Vowels("b"));
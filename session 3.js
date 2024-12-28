//* Day 3: Strings & String Manipulation
//? Session Overview:
//* Focus on basic string operations, traversal, and manipulation.
//? Session Practice Questions (5-7):
//! Reverse a string.

function reverse(str) {
    let rev = "";
    for (let ind = 0; ind < str.length; ind++) {
      // O(n)
      rev = str[ind] + rev;
    }
    return rev;
  }
   console.log(reverse("This is the input String"));
  
  // Zoho,
   function reverseAplha(str) {
      return str.split("").reverse().join("");
     console.log(str);
     let start = 0;
     let end = str.length - 1;
     str = str.split("");
     while (start < end) {
       while (
         start < end &&
         !(
           (str[start] <= "z" && str[start] >= "a") ||
           (str[start] <= "Z" && str[start] >= "A")
         )
       ) {
         //   rev[start] = str[start];
         start++;
       }
       while (
         start < end &&
         !(
           (str[end] <= "z" && str[end] >= "a") ||
           (str[end] <= "Z" && str[end] >= "A")
         )
       ) {
         //   rev[end] = str[end];
         end--;
       }
       [str[start], str[end]] = [str[end], str[start]];
       start++;
       end--;
     }
     console.log(str.join(""));
   }
  
   reverseAplha(
     "This is Problem Solving 101, Here you will learn A-Z. And course Password Is Guvi#$$1"
   );
  
  //! Check if a string is a palindrome.(without .split().reverse().join())
   function isPalindrome(str) {
     return str == reverse(str);
   }
  
   function isPalindrome(str) {
       let start = 0;
       let end = str.length - 1;
       while (start < end) {
           if (str[start] !== str[end]) return false;
           start++;
           end--;
       }
       return true;
   }
   console.log(isPalindrome("madam"));
   console.log(isPalindrome("racecar"));
   console.log(isPalindrome("madamimadam"));
   console.log(isPalindrome("Pugazharasan C"));
  //! Count vowels and consonants in a string.
   function countVowelsAndConsonants(str) {
     let vowels = 0;
     let consonants = 0;
     let space = 0;
     let specialChars = 0;
     let digits = 0;
     for (let ind = 0; ind < str.length; ind++) {
       if (str[ind] == " ") space++;
       else if (str[ind] <= 9 && str[ind] >= 0) digits++;
       else if (
         //   "aeiouAEIOU".indexOf(str[ind]) != -1
         str[ind] == "a" ||
         str[ind] == "e" ||
         str[ind] == "i" ||
         str[ind] == "o" ||
         str[ind] == "u" ||
         str[ind] == "A" ||
         str[ind] == "E" ||
         str[ind] == "I" ||
         str[ind] == "O" ||
         str[ind] == "U"
       ) {
         vowels++;
       } else if (
         (str[ind] <= "z" && str[ind] >= "a") ||
         (str[ind] <= "Z" && str[ind] >= "A")
       )
         consonants++;
       else {
         specialChars++;
       }
     }
     return {
       vowels,
       consonants,
       space,
       digits,
       specialChars,
     };
   }
  
   console.log(countVowelsAndConsonants("Pugazharasan C"));
   console.log(
     countVowelsAndConsonants(
       "This is Problem Solving 101, Here you will learn A-Z. And course Password Is Guvi#$$1"
     )
   );
  //! Convert a string to lowercase/uppercase. (without .toUpperCase/ .toLowerCase)
   function toLower(str) {
     let lowerStr = "";
     for (let ind = 0; ind < str.length; ind++) {
       if (str[ind] <= "Z" && str[ind] >= "A") {
         lowerStr += String.fromCharCode(str.charCodeAt(ind) + 32);
       } else lowerStr += str[ind];
     }
     return lowerStr;
   }
   function toUpper(str) {
     let upperStr = "";
     for (let ind = 0; ind < str.length; ind++) {
       if (str[ind] <= "z" && str[ind] >= "a") {
         upperStr += String.fromCharCode(str.charCodeAt(ind) - 32);
       } else upperStr += str[ind];
     }
     return upperStr;
   }
   console.log(toLower("EnnA vena nadakattum NAAN SANDHOSAMA IRUPPEN"));
   console.log(toUpper("Andha 4 pera idhu varaikum pakka villa NaaNum"));
  
  //! Find the longest word in a sentence. (without .length)
   function longestWord(str) {
     let start = 0;
     let longest = "";
     let longestLength = 0;
     let temp = "";
     let ind = 0;
     for (; str[ind] != undefined; ) {
       if (str[ind] == " ") {
         if (longestLength < ind - start) {
           longest = temp;
           longestLength = ind - start;
         }
         start = ind + 1;
         temp = "";
       } else {
         temp += str[ind];
       }
       ind++;
     }
     if (longestLength <= ind - start) {
       longest = temp;
       longestLength = ind - start;
     }
     return {
       longest,
       longestLength,
     };
   }
   console.log(longestWord("EnnA vena nadakattum NAAN SANDHOSAMA IRUPPEN"));
   console.log(longestWord("Andha 4 pera idhu varaikum pakka villa NaaNum"));
   console.log(
     longestWord(
       "This is ProblemSolving 101, Here you will learn A-Z. And course Password Is Guvi#$$1234567"
     )
   );
  //! Remove duplicates from a string.(without set)
   function removeDuplicates(str) {
      return [...new Set(str.split(""))].join("")
      let obj = {}
     let unique = "";
     for (let ind = 0; ind < str.length; ind++) {
       if (unique.indexOf(str[ind]) == -1) {
          obj[str[ind]] = false;
         unique += str[ind];
       }
     }
     return unique;
   }
   console.log(removeDuplicates("indha string la duplicates remove pannanum"));
  
   function removeDuplicatesWindow(str, windowSize) {
     let unique = "";
     for (let ind = 0; ind < str.length; ind++) {
       if (unique.indexOf(str[ind]) == -1) {
         unique += str[ind];
       } else if (unique.indexOf(str[ind]) < (unique.length - windowSize)) {
         unique += str[ind];
       }
     }
     return unique;
   }
   console.log(
     removeDuplicatesWindow("indha string la duplicates remove pannanum", 5)
   );
  //! Find all substrings of a given string.
  // "ABC" => "A", "B", "C", "AB", "BC", "ABC"
  function substringsOf(str) {
    let subStr = [];
    let pos = 0;
    for (let ind = 0; str[ind] != undefined; ind++) {
      let temp = "";
      for (let i = ind; str[i] != undefined; i++) {
        temp = temp + str[i];
        subStr[pos++] = temp;
      }
    }
    return subStr;
  }
  
  console.log(substringsOf("PugahzarasanC").sort((a, b) => a.length - b.length));
  
  // TODO Post-Session Practice Questions (10):
  // TODO Concatenate two strings.
  // TODO Find the frequency of each character in a string.
  // TODO Replace spaces in a string with %20.
  // TODO Check if a string is an anagram of another.
  // TODO Count the number of words in a sentence.
  // TODO Find the first non-repeating character in a string.
  // TODO Remove all vowels from a string.
  // TODO Find the shortest word in a sentence.
  // TODO Count occurrences of a substring within a string.
  // TODO Capitalize the first letter of each word in a sentence.
  
  // function primeTill(n) {
  //   const arr = Array(n + 1).fill(true);
  //   arr[0] = arr[1] = false;
  //   for (let val = 2; val < n; val++) {
  //     if (arr[val] !== false)
  //       for (let ind = val * val; ind <= n; ind += val) {
  //         arr[ind] = false;
  //       }
  //     }
  //     console.log(arr)
  //     const primeNumbers = arr.reduce((acc, val, ind) => {
  //       if (val) acc.push(ind);
  //       return acc;
  //     }, []);
  //     return primeNumbers;
  // }
  
  // console.log(primeTill(10000))
  
  // "To"
  
  // "T" + "" => "T"
  // "o" + "T" => "oT"
  
  
  
  function createPascal(n) {
      const arr = []
      arr[0] = [1]
      for (let ind = 1; ind < n; ind++){
          let x = [...arr[ind-1], 0]
          for (let ind2 = 1; ind2 <= ind; ind2++){
              x[ind2] += arr[ind-1][ind2-1] || 1
          }
          arr.push(x)
      }
      return arr;
  }
  console.log(createPascal(10).map((x, ind) => " ".repeat(10 - ind) + x.join(" ")).join("\n"))
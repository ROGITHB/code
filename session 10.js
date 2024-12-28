//? Day 10: Recap of Two-Pointer, Fast & Slow Pointers, Sliding Window, and Hashing
//? Session Overview:
//* Reinforce key techniques and apply them to array, linked list, and string problems.
//? Session Practice Questions (5-7):
//? Find two numbers in a sorted array that add up to a target sum (two-pointer).

getRandomArr = (x) =>
    Array.from({ length: x }, () => Math.floor(Math.random() * 10000));
  
  // [1, 2, 3, 4, 7, 8, 9, 10, 16, 17, 18, 19, 20], (target) => 15;
  
  function twoSum(arr, target) {
    console.log(arr, target);
  
    let left = 0,
      right = arr.length - 1;
  
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (target == sum) return [arr[left], arr[right]];
      else if (sum < target) left++;
      else right--;
    }
    //   let num1 = arr[0],
    //     num2 = arr[1];
    //   for (let i = 0; i < arr.length; i++) { // O(n**2)
    //     for (let j = i + 1; j < arr.length; j++) {
    //       if (arr[i] + arr[j] === target) {
    //         num1 = arr[i];
    //         num2 = arr[j];
    //         return [num1, num2];
    //       }
    //     }
    //   }
    return [-1, -1];
  }
  
  function twoSum2(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
      let diff = target - arr[i];
      console.log(target, diff, arr[i]);
      if (map.has(arr[i])) return [diff, arr[i]];
      map.set(diff, arr[i]);
    }
    console.log(map);
    return [-1, -1];
  }
  
  // const arr = getRandomArr(10); //.sort((a, b) => a - b);
  // const target =
  //   arr[Math.floor(Math.random() * 10)] + arr[Math.floor(Math.random() * 10)];
  // console.log(twoSum2([1, 2, 3, 4, 7, 8, 9, 10, 16, 17, 18, 19, 20], 15));
  // console.log(arr, target);
  // console.log(twoSum2(arr, target));
  
  //? Remove duplicates from a sorted array (in place).
  function removeDuplicates(arr) {
    let fastInd = 0;
    let slowInd = 0;
    while (fastInd < arr.length) {
      if (arr[fastInd] !== arr[slowInd]) {
        slowInd++;
        arr[slowInd] = arr[fastInd];
      }
      fastInd++;
    }
    arr.length = slowInd + 1;
    return arr;
    // if(arr.length < 2) return arr
    //   let result = [arr[0]];
    //   for (let i = 1; i < arr.length; i++) {
    //     if (arr[i - 1] !== arr[i]) {
    //   result.push(arr[i]);
    //     }
    //   }
    //   return result;
  }
  
  // const arr = [
  //   1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 9,
  // ];
  
  // console.log(removeDuplicates(arr));
  //? Check if a linked list has a cycle (fast & slow pointers).
  function hasCycle(head) {
    let slow = head,
      fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
    return false;
  }
  //? Find the length of the longest substring without repeating characters (sliding window).
  
  function longestNonRepeatingSubstring(str) {
    let longest = "";
    function longestString(index, curr) {
      console.log(curr);
      if (longest.length < curr.length) longest = curr;
      if (str.length === index) return;
      if (curr.includes(str[index])) {
        curr = curr.substring(curr.indexOf(str[index]) + 1);
      }
      longestString(index + 1, curr + str[index]);
    }
    longestString(0, "");
    console.log(longest);
    return longest.length;
  }
   console.log(longestNonRepeatingSubstring("pugazharasan"));
  
  //? Find the maximum sum of a subarray of size k (sliding window).
  function findMaxSumSubarray(arr, k) {
    let maxSum = -Infinity,
      currSum = 0,
      windowStart = 0;
    for (let ind = 0; ind < arr.length; ind++) {
      currSum += arr[ind];
      if (ind >= k - 1) {
        maxSum = maxSum < currSum ? currSum : maxSum;
        currSum -= arr[windowStart];
        windowStart++;
      }
    }
    return maxSum;
  }
  
  // const arr = getRandomArr(10);
  // console.log(arr);
  // console.log(
  //     findMaxSumSubarray(
  //         arr,
  //         3
  //     )
  // );
  //? Check if a permutation of one string is a substring of another.
  function cInd(char) {
    return char.charCodeAt(0) - "a".charCodeAt(0);
  }
  function check(str1, str2) {
    if (str1.length > str2.length) return false;
    const str1freq = Array(26).fill(0);
    for (let ind = 0; ind < str1.length; ind++) {
      str1freq[cInd(str1.charAt(ind))]++;
    }
    const str2freq = Array(26).fill(0);
    for (let ind = 0; ind < str1.length; ind++) {
      str2freq[cInd(str2.charAt(ind))]++;
    }
    for (let ind = str1.length; ind < str2.length; ind++) {
      if (str1freq.toString() == str2freq.toString()) {
        console.log(str1freq.toString());
        console.log(str2freq.toString());
        return true;
      }
      str2freq[cInd(str2.charAt(ind - str1.length))]--;
      str2freq[cInd(str2.charAt(ind))]++;
    }
    return str1freq.toString() == str2freq.toString();
  }
  
   console.log(check("ab", "accccba"));
  //? Determine if a string can be rearranged to form a palindrome.
  function checkpal(str) {
    const freq = Array(26).fill(0);
    for (let ind = 0; ind < str.length; ind++) {
      freq[cInd(str.charAt(ind))]++;
    }
    let countOdd = 0;
    for (let val of freq) {
      if (val % 2 == 1) countOdd++;
    }
    return countOdd <= 1;
  }
  console.log(checkpal("ammad")); 
  console.log(checkpal("xyzyjjz")); 
  console.log(checkpal("mississipi"));
  console.log(checkpal("mississippi")); 
  // // Post-Session Practice Questions (10):
  // // Find all triplets in an array that sum up to zero.
  // // Find the maximum length of a subarray with equal 0s and 1s.
  // // Check if an array contains duplicate elements within k distance.
  // // Find the longest subarray with a sum equal to k.
  // // Count the number of subarrays with a sum equal to zero.
  // // Find the first missing positive integer in an array.
  // // Merge two sorted arrays without using extra space.
  // // Find the longest mountain in an array.
  // // Sort an array by the parity of elements.
  // // Find all pairs in an array with a difference equal to a target value.
  
  function minimumDistance(arr) {
    const m = arr.length;
    const n = arr[0].length;
    const dp = Array(m)
      .fill()
      .map(() => Array(n).fill(Infinity));
    console.log(dp);
    dp[0][0] = arr[0][0];
    for (let ind = 1; ind < m; ind++) {
      dp[0][ind] = dp[0][ind - 1] + arr[0][ind];
    }
    for (let ind = 1; ind < n; ind++) {
      dp[ind][0] = dp[ind - 1][0] + arr[ind][0];
    }
    for (let ind = 1; ind < m; ind++) {
      for (let ind1 = 1; ind1 < n; ind1++) {
        let top = dp[ind - 1][ind1];
        let left = dp[ind][ind - 1];
        dp[ind][ind1] = Math.min(top, left) + arr[ind][ind1];
      }
      }
      console.log(dp.map(x => `[${x}]`).join("\n"))
      return dp[m-1][n-1];
  }
  
  console.log(
    minimumDistance([
      [1, 3, 1],
      [4, 1, 6],
      [7, 1, 1],
    ])
  );
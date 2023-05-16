//==========================================================================
//Quiz 1
// function isPalindrome(str) {
//     // Remove all non-alphanumeric characters and convert to lowercase
//     const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     // Check if the reversed string is equal to the original string
//     const reversedStr = cleanStr.split('').reverse().join('');
//     return cleanStr === reversedStr;
//   }

//   const input1 = "dad";
// console.log(isPalindrome(input1));  // Output: true

// const input2 = "madam";
// console.log(isPalindrome(input2));  // Output: true

// const input3 = "hello";
// console.log(isPalindrome(input3));  // Output: false


//================================================================================
//quiz 2
// function areAnagrams(str1, str2) {
//     // Remove all non-alphanumeric characters and convert to lowercase
//     const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     // Check if the lengths of the cleaned strings are equal
//     if (cleanStr1.length !== cleanStr2.length) {
//         return false;
//     }

//     // Create character frequency maps for both strings
//     const charMap1 = {};
//     const charMap2 = {};

//     for (let char of cleanStr1) {
//         charMap1[char] = charMap1[char] + 1 || 1;
//     }

//     for (let char of cleanStr2) {
//         charMap2[char] = charMap2[char] + 1 || 1;
//     }

//     // Compare the character frequency maps
//     for (let char in charMap1) {
//         if (charMap1[char] !== charMap2[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// const input1 = "abcd";
// const input2 = "dabc";
// console.log(areAnagrams(input1, input2));  // Output: true

// const input3 = "Hello";
// const input4 = "Hola";
// console.log(areAnagrams(input3, input4));  // Output: false

// const input5 = "rail safety";
// const input6 = "fairy tales";
// console.log(areAnagrams(input5, input6));  // Output: true

//======================================================================================================
//Quiz 3

// function isBlank(str) {
//     // Remove whitespace characters and check if the resulting string is empty
//     return str.trim() === '';
// }
// const input1 = "Hello World";
// console.log(isBlank(input1));  // Output: false

// const input2 = "    ";
// console.log(isBlank(input2));  // Output: true

// const input3 = "";
// console.log(isBlank(input3));  // Output: true

// const input4 = "   OpenAI   ";
// console.log(isBlank(input4));  // Output: false

//======================================================================================================
//Quiz 4
// function protect_email(email) {
//     const atIndex = email.indexOf('@');
//     if (atIndex <= 0) {
//       return email;
//     }
  
//     const username = email.slice(0, atIndex);
//     const domain = email.slice(atIndex + 1);
//     const protectedUsername = username.slice(0, 4) + '...';
  
//     return protectedUsername + '@' + domain;
//   }
//   const email = "robin_singh@example.com";
//   console.log(protect_email(email));  // Output: "robin...@example.com"


//======================================================================================================
//Quiz 5
//function reverseWords(str) {
//     // Check if the input is a string
//     if (typeof str !== 'string') {
//       return "It must be a string.";
//     }
  
//     // Split the string into an array of words
//     const words = str.split(' ');
  
//     // Reverse each word in the array
//     const reversedWords = words.map(word => reverseString(word));
  
//     // Join the reversed words back into a string
//     return reversedWords.join(' ');
//   }
  
//   // Helper function to reverse a string
//   function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
//   console.log(reverseWords("abc"));  // Output: "cba"
//   console.log(reverseWords("JavaScript Exercises"));  // Output: "tpircSavaJ sesicrexE"
//   console.log(reverseWords(1234));  // Output: "It must be a string."
    
    


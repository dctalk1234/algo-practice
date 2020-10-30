// Check if a String is a Palindrome or not.
// The string can have a mix of numbers, uppercase and/or lower case letters.
// String length 1 < str.length > 1000

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Remove white spaces with regular expressions
  str = s.replace(/[^0-9A-Za-z]/g, "");

  // Find if it is palindrome or not
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i].toUpperCase() !== str[j].toUpperCase()) {
      return false;
    }
  }
  return true;
};

const str1 = "A man, a plan, a canal: Panama";
console.log(`"${str1}" is Palindrome: ${isPalindrome(str1)}`);

const str2 = "race a car";
console.log(`"${str2}" is Palindrome: ${isPalindrome(str2)}`);

// const strArr = [
//   "bab",
//   "a",
//   "Amertytrema",
//   "abcdeedcba",
//   "abcdefdcba",
//   "12345654321",
//   "123321",
//   "4352",
//   ""
// ];

// strArr.forEach((str) =>
//   console.log(`"${str}" is palindrome: ${isPalindrome(str)}`)
// );

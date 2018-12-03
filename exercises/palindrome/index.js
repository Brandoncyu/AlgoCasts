// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let lastChar = str.length - 1
  if (str.length < 2) return true
  if (str[0] !== str[lastChar]) {
    return false
  } else {
    let newStr = str.slice (1, str.length - 1)
    return palindrome(newStr)
  }
}

module.exports = palindrome;

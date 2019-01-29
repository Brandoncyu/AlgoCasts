// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
  return str.split('').reduce(function(acc, string){
    let lowStr = string.toLowerCase()
    if (vowelSet.has(lowStr)) acc++
    return acc
  }, 0)
}

module.exports = vowels;

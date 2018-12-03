// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let stack = {}
  let mainKey = ''
  let maxVal = 0

  for (letter of str){
    stack[letter] = stack[letter] + 1 || 1
  }

  for (key in stack){
    if (stack[key] > maxVal ) {
      maxVal = stack[key]
      mainKey = key
    }
  }
  return mainKey
}

module.exports = maxChar;

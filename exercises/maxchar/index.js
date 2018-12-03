// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let stack = {}

  for (letter of str){
    stack[letter] = stack[letter] + 1 || 1
  }
  let max = { 'mainKey': '', 'maxVal': 0 }
  for (key in stack){
    if (stack[key] > max['maxVal'] ) max = { 'mainKey': key, 'maxVal': stack[key]}
  }
  return max['mainKey']
}

module.exports = maxChar;

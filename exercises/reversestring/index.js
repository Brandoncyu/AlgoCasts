// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let result = ''
  while (str.length > 0){
    let length = str.length - 1
    result += str[length]
    str = str.slice(0, length)
  }
  return result
}

module.exports = reverse;

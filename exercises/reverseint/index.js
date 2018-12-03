// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let orig = n
  let result = ''
  let negative = false
  if (n < 0){
    n = n * -1
    negative = true
  }
  let nString = n.toString()
  if (nString.length === 1) return orig
  for (character of nString){
    result = character + result
  }
  let returnedResult = parseInt(result)
  if (negative) returnedResult *= -1
  return returnedResult
}

module.exports = reverseInt;

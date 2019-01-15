// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const key = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
  let result = true
  let keyA = stringA.split('').reduce(function(accumulator, letter){
    let lowLetter = letter.toLowerCase()
    if (key.has(lowLetter) && !accumulator[lowLetter]){
      accumulator[lowLetter] = 1
    } else if (key.has(lowLetter) && accumulator[lowLetter]){
      accumulator[lowLetter]++
    }
    return accumulator
  }, {})
  let keyB = stringB.split('').reduce(function(accumulator, letter){
    let lowLetter = letter.toLowerCase()
    if (key.has(lowLetter) && !accumulator[lowLetter]){
      accumulator[lowLetter] = 1
    } else if (key.has(lowLetter) && accumulator[lowLetter]){
      accumulator[lowLetter]++
    }
    return accumulator
  }, {})
  console.log(keyA)
  if (Object.keys(keyA).length !== Object.keys(keyB).length){
    result = false
  } else{
    for(var newKey in keyA){
      if (keyA[newKey] !== keyB[newKey]) result = false
    }
  }

  return result
}

module.exports = anagrams;

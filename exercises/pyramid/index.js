// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let length = 2 * n - 1
  for (var i = 1; i < n + 1; i++){
    let string = '#'
    let count = 1
    while (string.length < length){
      if (count < i){
        string = '#' + string + '#'
        count++
      } else{
        string = ' ' + string + ' '
      }
    }
    console.log(string)
  }
}

module.exports = pyramid;

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (var i = 0; i < n; i++){
    let count = i + 1
    let string = ''
    while (string.length < n){
      if (count > 0){
        string += '#'
        count--
      } else{
        string += ' '
      }
    }
    console.log(string)
  }
}

module.exports = steps;

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let result = []
  while (array.length > size){
    result.push(array.slice(0,size))
    array = array.slice(size)
  }
  if (array.length > 0){
    result.push(array)
  }
  return result
}

module.exports = chunk;

// function chunk(array, size) {
//   let result = [ [] ]
//   for(num of array){
//     let last = result.length - 1
//     if (result[last].length < size) {
//       result[last].push(num)
//     } else{
//       let newArray = [num]
//       result.push(newArray)
//     }
//   }
//   return result
// }

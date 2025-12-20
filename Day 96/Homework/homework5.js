/* 5. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
You can assume that all values are integers. Do not mutate the input array.
*/

function invert(array) {
   let list = []
   for(let i = 0;i < array.length;i++) {
     list.push(array[i] * -1)
   }
  return list
}

console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]))
console.log(invert([]))
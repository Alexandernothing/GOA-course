/* 8. Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 */

function digitize(n) {
  let result = []
  let length = String(n).length
  for(let i = 0;i < length;i++) {
    result.unshift(Number(String(n)[i]))
  }
  return result
}

console.log(digitize(35231))
console.log(digitize(0))
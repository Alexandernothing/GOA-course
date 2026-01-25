/* 9. Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
*/

function solution(str, ending){
  let length = ending.length
  if(length === 0) {
    return true
  }
  else{
    return ending === str.slice(length * -1)
  }
}

console.log(solution("abc", "bc"))
console.log(solution("abc", "def"))
console.log(solution("abc", ""))
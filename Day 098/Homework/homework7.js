/* 7. Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let empty = []
  let count_zero = 0
  for(let i = 0;i < arr.length;i++) {
    if(arr[i] !== 0) {
      empty.push(arr[i])
    }
    else{
      count_zero++
    }
  }
  while(count_zero !== 0) {
    empty.push(0)
    count_zero--
  }
  return empty
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
/* 2. Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
   let result = ""
   for(let i = 0;i < x.length;i++) {
     if(x[i] < 5) {
      result += "0"
     }
    else{
      result += "1"
    }
   }
  return result
}

console.log(fakeBin("12345678909876543214567890987654321098765432345678765432123456789"))
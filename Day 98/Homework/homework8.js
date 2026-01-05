/* 8. Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

function spinWords(string){
  let str = string.split(" ")
  let reversed = ""
  let result = ""
  
  for(let i = 0;i < str.length;i++) {
    if(str[i].length >= 5) {
      for(let index = str[i].length - 1;index >= 0;index--) {
        reversed += str[i][index]
      }
      result += reversed + " "
      reversed = ""
    }
    else{
      result += str[i] + " "
    }
  }
  return result.slice(0, -1)
}

console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))
console.log(spinWords("You are almost to the last test"))
console.log(spinWords("Just kidding there is still one more"))
console.log(spinWords("Seriously this is the last one"))
/* შეიყვანე ორი სიტყვა prompt-ით.
თუ ტოლია — "სიტყვები ემთხვევა",
თუ მხოლოდ პირველი ასოები ემთხვევა მაშინ - “პირველი ასოები ემთხვევა”
სხვა შემთხვევაში — "არ ემთხვევა". */

let word1 = prompt("Enter any word: ")
let word2 = prompt("Enter any word again: ")

if(word1 === word2) {
    console.log("სიტყვები ემთხვევა")
}
else if(word1[1] === word2[1]) {
    console.log("პირველი ასოები ემთხვევა")
}
else{
    console.log("არ ემთხვევა")
}
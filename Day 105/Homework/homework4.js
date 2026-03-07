// 4. გააკეთეთ პატარა თამაში. მომხმარებელმა უნდა შემოიტანოს 1-დან 100-მდე რენდომ რიცხვი. და უნდა გამოიცნოს რენდომ რიცხვი. იმ შემთხვევაში თუ მომხმარებლის შემოტანილ რიცხვს და ჩაფიქრებულ რიცხვს შორის შუალედი 10-ზე ნაკლებია. მიანიშნოს მომხმარებელს რომ გამოცნობასთან ძალიან ახლოს არის. სხვა შემთხვევაში უთხრას მეტია თუ ნაკლები.

let num = Math.floor(Math.random() * 100) 
let userNum = Number(prompt("Guess the number 1-100:"))

while (userNum !== num) {
    if (userNum - num <= 10 && num - userNum <= 10) {
        userNum = Number(prompt("You are really close!"))
    } 
    else if (userNum > num) {
        userNum = Number(prompt("Try a bit lower"))
    } 
    else {
        userNum = Number(prompt("Try a bit higher"))
    }
}

console.log("You've guessed it!")
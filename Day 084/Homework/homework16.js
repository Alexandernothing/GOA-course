// 16. მომხმარებელს შემოატანინე ორი რიცხვი და შეამოწმე, მაინც ერთი უარყოფითია თუ არა.

let num1 = Number(prompt("Enter any number: "))
let num2 = Number(prompt("Enter any number again: "))

if(num1 < 0 || num2 < 0) {
    console.log("At least one of your number is negative")
}
else{
    console.log(num1, num2)
}
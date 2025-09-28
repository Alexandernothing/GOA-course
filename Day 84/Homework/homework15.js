// 15. მომხმარებელს შემოატანინე ორი რიცხვი და შეამოწმე, ორივე დადებითია თუ არა.

let num1 = Number(prompt("Enter any number: "))
let num2 = Number(prompt("Enter any number again: "))

if(num1 > 0 && num2 > 0) {
    console.log("Your numbers are positive")
}
else{
    console.log(num1, num2)
}
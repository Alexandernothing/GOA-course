// 22. მომხმარებელს შემოატანინე ორი რიცხვი და შეამოწმე, ორივე დადებითია თუ არა და მათი ჯამი მეტია 100-ზე.

let num1 = Number(prompt("Enter any number: "))
let num2 = Number(prompt("Enter any number again: "))

if(num1 > 0 && num2 > 0 && num1 + num2 > 100) {
    console.log("Both of your numbers are positives and their sum is greater than 100")
}
else{
    console.log(num1, num2)
}
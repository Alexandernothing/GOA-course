// 8. მომხმარებელს შემოატანინეთ ორი რიცხვი და გამოიტანეთ მაქსიმალური რიცხვი ამ ორიდან.

let num1 = Number(prompt("Enter any number: "))
let num2 = Number(prompt("Enter any number again: "))

if(num1 > num2) {
    console.log("Max number is", num1)
}
else if(num1 < num2) {
    console.log("Max number is", num2)  
}
else{
    console.log("The numbers are equal")
}
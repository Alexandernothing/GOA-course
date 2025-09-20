// 2. შექმენით კალკულატორი, მომხმარებელს უნდა შემოატანინოთ ორი რიცხვი და მოქმედება და შედეგი გამოიტანოთ alert-ში.

let num1 = Number(prompt("Enter any number: "))
let operation = prompt("Enter any mathematical operation: ")
let num2 = Number(prompt("Now enter any number again: "))

if(operation == "+") {
    console.log(num1 + num2)
}
else if(operation == "-") {
    console.log(num1 - num2)
}
else if(operation == "*") {
    console.log(num1 * num2)
}
else if(operation == "/") {
    console.log(num1 / num2)
}
else if(operation == "%") {
    console.log(num1 % num2)
}
else if(operation == "**") {
    console.log(num1 ** num2)
}
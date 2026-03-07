// 2. გააკეთეთ მარტივი კალკულატორი switch / case -ების გამოყენებით.

let num1 = Number(prompt("Enter first num:"))
let operator = prompt("Enter operator")
let num2 = Number(prompt("Enter second num:"))

switch(operator) {
    case "+":
        console.log(num1 + num2)
        break
    case "-":
        console.log(num1 - num2)
        break
    case "/":
        console.log(num1 / num2)
        break
    case "*":
        console.log(num1 * num2)
        break
    case "**":
        console.log(num1 ** num2)
        break
    case "%":
        console.log(num1 % num2)
        break
    default:
        console.log("invalid input")
        break
}
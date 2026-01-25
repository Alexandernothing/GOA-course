// 2. შექმენით კალკულატორის ფუნქცია, რომელსაც უნდა გადაეცეს სამი არგუმენტი. ორი რიცხვი და 1 მოქმედება უნდა იყოს.

function calculator(num1, operator, num2) {
    if(operator === "+") {
        return num1 + num2
    }
    else if(operator === "-") {
        return num1 - num2
    }
    else if(operator === "*") {
        return num1 * num2
    }
    else if(operator === "/") {
        return num1 / num2
    }
    else if(operator === "%") {
        return num1 % num2
    }
    else if(operator === "**") {
        return num1 ** num2
    }
}

console.log(calculator(2, "+", 3))
console.log(calculator(2, "-", 3))
console.log(calculator(2, "*", 3))
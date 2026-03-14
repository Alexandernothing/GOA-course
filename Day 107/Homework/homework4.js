// 4. შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ ორობით სისტემაში მყოფ რიცხვს გადაიყვანს ათობით სისტემაში.

let Decimal = (num) => {
    let decimal = 0  
    let num1 = String(num) 

    for (let i = 0; i < num1.length; i++) {
        decimal = decimal * 2 + Number(num1[i])
    }
    return decimal
}
console.log(Decimal(2164))


let bToDecimal = function(num) {
    let decimal = 0  
    let num1 = String(num) 

    for (let i = 0; i < num1.length; i++) {
        decimal = decimal * 2 + Number(num1[i])
    }
    return decimal
}
console.log(bToDecimal(2164))
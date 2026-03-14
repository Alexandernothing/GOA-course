// 2. შექმენით ფუნქცია რომელსაც გადაეცემა ორი რიცხვი არგუმენტად და ამ რიცხვებს შორის გაავლებს დიაპაზონს. შემდეგ დაგვიბრუნებს ამ რიცხვების ნამრავლს

let multiple = (num1, num2) => {
    let m = 1
    for(let i = num1;i <= num2;i++) {
        m *= i
    }
    return m
}
console.log(multiple(2, 4))

let multiple1 = function(number1, number2) {
        let mm = 1
    for(let ii = number1;ii <= number2;ii++) {
        mm *= ii
    }
    return mm

}
console.log(multiple1(2, 4))
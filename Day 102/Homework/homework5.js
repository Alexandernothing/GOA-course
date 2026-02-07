/* 5. შექმენით ობიექტი სადაც შეინახავთ ნებისმიერი ტიპის ინფორმაციას. მომხმარებელს შემოატანინეთ key. თუ ეს key არის ობიექტში მაშინ კონსოლში გამოაჩინეთ შესაბამისი მნიშვნელობა. სხვა შემთხვევაში შემოატანინე value და ობიექტში დაამატეთ.
*/

let object = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
    num5: 5
}
let userNum = Number(prompt("Enter any num: "))

for(let i in object) {
    if(object[i] === userNum) {
        console.log(object[i])
    }
    else {
        object.num6 = userNum
        console.log(object)
    }
}
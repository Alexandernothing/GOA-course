/* 4)
შექმენით ობიექტი სადაც შეინახავთ რამოდენიმე რიცხვს როგორც კენტს ასევე ლუწს,
თქვენი დავალებაა რომ იპოვოთ ყველა ლუწი რიცხვის ჯამი და კენტი რიცხვების რაოდენობა 
*/

let count = 0
let sum = 0

let object = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4
}

for(let i in object) {
    if(object[i] % 2 === 0) {
        sum += object[i]
    }
    else {
        count++
    }
}

console.log(sum)
console.log(count)
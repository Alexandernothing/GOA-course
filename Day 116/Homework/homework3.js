// 3. შექმენით ცვლადი სადაც შეინახავთ რიცხვს. თქვენი მიზანია ეს რიცხვი შეაბრუნოთ და ისე დააბრუნოთ შედეგი.

let num = 12345
let reversed = ""
let number = String(num)

for(let i = number.length - 1;i >= 0;i--) {
    reversed += number[i]
}

console.log(Number(reversed))
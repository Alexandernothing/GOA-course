// 2. შექმენით ცვლადი სადაც შეინახავთ რენდომ რიცხვს 1-დან 20-მდე. მომხმარებელმა კი უნდა გამოიცნოს ეს რიცხვი.

let num = Math.floor(Math.random() * 20)
let usernum = Number(prompt("Guess the number 1-20:"))

do {
    usernum = Number(prompt("Try again"))
} while(num !== usernum)
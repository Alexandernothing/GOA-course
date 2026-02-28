// 1. შექმენით  ობიექტი, რომელშიც იქნება მოსწავლის ინფორმაცია. შემდეგ for in-ის გამოყენებით გადაუარეთ პირველ ობიექტს. და თითოეული სტრინგი გადაამრავლეთ რენდომ რიცხვზე 1-დან 5-მდე და ისე გამოიტანეთ კონსოლში.

let object = {
    name: "Aleqsandre",
    lastname: "Egutia"
}

let num = Math.floor(Math.random() * 5) + 1
console.log(num)
let nameN = ""

for(let i in object) {
    for(let ii = 0;ii < num;ii++) {
        nameN += object[i]
    }
}
console.log(nameN)

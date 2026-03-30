// 2. შექმენით სია,სადაც მოათავსებ რაიმე სტრინგენბს, შემნი დავალებაა რომ do while ის გამოყენებით დაითვალო თუ რამდენი სტრინგია სიაში ისეთი რომლის სიგრძე არის ლუწი

let list = ["Hello", "world", "cat", "emperor", "deck", "t-shirt"]
let count = 0
let i = 0

do {
    if(list[i].length % 2 === 0) {
        count++
    }
    i++
} while (i < list.length)
console.log(count)
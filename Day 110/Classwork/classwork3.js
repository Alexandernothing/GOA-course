// 3. შექმენით სია, სადაც იქნება სახელები ჩამოწერილი. დააბრუნეთ პირველივე ელემენტის ინდექსი, რომელის სიგრძეც მეტია 5-ზე

let names = ["Giorgi", "Aleqsandre", "Aleqsi", "Nika", "Ana"]

let result = names.findIndex((i) => i.length > 5)
console.log(result)
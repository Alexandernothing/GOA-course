// 16. მოცემულია ობიექტი const user = { id: 10, username: "Ana" };. დესტრუქტურიზაციის გამოყენებით ამოიღეთ ეს თვისებები ისე, რომ id ჩაწეროთ ცვლადში სახელად userId, ხოლო username ცვლადში სახელად name.

const user = { id: 10, username: "Ana" }

let { id: userId, username: name } = user

console.log(userId) 
console.log(name)  
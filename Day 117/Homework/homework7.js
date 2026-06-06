// 7. შექმენით სია სადაც გექნებათ იუზერების ობიექტები (id, name, age). find()-ის გამოყენებით იპოვეთ ის მომხმარებელი, რომლის id იქნება 3-ის ტოლი და დააბრუნეთ ეს ობიექტი.

// 1. ვქმნით იუზერების სიას (მასივს)
let users = [
    { id: 1, name: "Aleqsandre", age: 25 },
    { id: 2, name: "Niko", age: 2 },
    { id: 3, name: "Ika", age: 56 }, 
    { id: 4, name: "Taso", age: 28 },
    { id: 5, name: "Dato", age: 35 }
]

let finding = users.find(user => user.id === 3)

console.log(finding)
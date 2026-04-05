// 3. შექმენით სია სადაც იქნება სტრინგები. დააბრუნეთ ისეთი სტრინგები რომლებიც ხმოვნით იწყება

let list = ["hello", "Helllo", "apple", "Apple", "CrocodilE", "EGG"]

let result = list.filter((i) => i[0] === "a" || i[0] === "e" || i[0] === "i" || i[0] === "o" || i[0] === "u" || i[0] === "A" || i[0] === "E" || i[0] === "I" || i[0] === "O" || i[0] === "U")
console.log(result)
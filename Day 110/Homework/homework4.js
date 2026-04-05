// 4. შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნეთ მხოლოდ კენტი რიცხვები.

let list = ["hello", 2, true, "world", 43, false]

let result = list.filter((i) => typeof(i) === "number" && i % 2 !== 0)
console.log(result)
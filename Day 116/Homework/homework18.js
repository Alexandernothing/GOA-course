// 18. შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნეთ მხოლოდ სტრინგ ტიპის მონაცემები.

let list = ["hello", 1, true]
let result = list.filter(i => typeof(i) === "string")

console.log(result)
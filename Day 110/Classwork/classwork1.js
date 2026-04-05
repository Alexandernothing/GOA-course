// 1. შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნეთ ისეთი ელემენტები რომლებიც სტრინგები არის.

let list = [1, 2, 3, 4, 5, "hello", "world", "!",true, false]

let result = list.filter((i) => typeof(i) === "string") 
console.log(result)
// 3. შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. და ახალ სიაში დააბრუნეთ მხოლოდ ის ელემენტები რომლებიც იქნება სტრინგ ტიპის მონაცემი (for of-ით)

let list = ["Hello", 1223234, [567], "World"]
let newList = []

for(let i of list) {
    if(typeof i === "string") {
         newList.push(i)
    }
} 

console.log(newList)
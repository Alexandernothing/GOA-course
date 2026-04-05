// 2. შექმენით სია სადაც ათწილადები და მთელი რიცხვები. გამოიტანეთ მხოლოდ ისეთი რიცხვები რომლებიც არის მთელი

let list = [1, 1.1, 2, 2.2, 3, 3.3]
let empty = []
let preResult = list.forEach(function(i) {
    empty.push(String(i))
})
let result = empty.filter((num) => !num.includes("."))
console.log(result)
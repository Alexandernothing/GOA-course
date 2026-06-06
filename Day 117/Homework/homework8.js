// 8. შექმენით სია სადაც იქნება ათწილადები და მთელი რიცხვები. დააბრუნეთ პირველი ათწილადი რიცხვი.

let numbers = [1, 1.1, 2, 2.2, 3, 3.3]

let result = numbers.find(num => num.toString().includes('.'))

console.log(result)
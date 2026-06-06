// 2. შექმენით სია სადაც იქნება შენახული 5 ობიექტი პროდუქტების შესახებ. თქვენი დავალებაა რომ ამ პროდუქტების ფასები შეკრიბოთ

let list = [
    { name: "apple", price: 2 },
    { name: "banana", price: 3 },
    { name: "tomato", price: 4 },
    { name: "melon", price: 5 },
    { name: "watermelon", price: 6 }
]

let sum = list.reduce((acc, curr) => {
    return acc + curr.price 
}, 0)
console.log(sum)
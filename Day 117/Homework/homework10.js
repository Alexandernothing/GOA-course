// 10. შექმენით სია სადაც გექნებათ სტრინგები. დააბრუნეთ ისეთი ელემენტის ინდექსი რომლის სიგრძეც მეტია 7-ზე.

let list = ["apple", "pear", "berry", "watermelon", "strawberry"]

let result = list.findIndex(i => i.length > 7)

console.log(result)
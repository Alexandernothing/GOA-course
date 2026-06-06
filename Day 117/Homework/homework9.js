// 9. შექმენით სია სადაც გექნებათ რიცხვები და სტრინგები. იპოვეთ პირველივე სტრინგ ტიპის ელემენტის ინდექსი და სიიდან ამოშალეთ.

let list = [10, 25, "apple", 42, "banana", 7, "melon", 12];

let index = list.findIndex(i => typeof(i)  === "string")

list.splice(index, 1)

console.log(list)
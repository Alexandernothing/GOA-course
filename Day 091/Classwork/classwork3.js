// 3. შექმენით 5 ელემენტიანი სია. და მე-3 ინდექსზე დაამატეთ "Goa" და ბოლო ელემენტი წაშალეთ.

let list = ["hello", "cat", "door", "glass", "car"]

list.splice(3, 0, "Goa")
list.pop()

console.log(list)

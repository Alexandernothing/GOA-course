// 6. მოცემული გაქვთ სია: [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900] ეს სია დაალაგეთ ზრდადობით.

let list = [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900]
list.splice(1, 0, 20)
list.splice(2, 0, 40)
list.splice(3, 0, 100)
list.splice(4, 0, 125)
list.splice(5, 0, 150)
list.splice(6, 0, 150)
list.splice(7, 0, 200)
list.splice(8, 0, 300)
list.splice(9, 0, 900)
list.splice(10, 0, 1000)

console.log(list)
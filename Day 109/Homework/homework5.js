// 5. შექმენით სია სადაც იქნება მინიმუმ 10 რიცხვი. და გადაამრავლეთ ერთმანეთზე.

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let multiply = 1

list.forEach((i) => {
        multiply = multiply * i
})
console.log(multiply)
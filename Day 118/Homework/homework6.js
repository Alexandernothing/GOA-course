// 6. შექმენი ობიექტი და მოახდინეთ ამ ობიექტის დესტრუქცია, შეუცვალეთ სახელებიც.

let obj = {
    name: "Aleqsandre",
    surname: "Egutia",
    age: 14
}

let { name: Aleqsi, surname: Egutia, age: age } = obj

console.log(name)
console.log(surname)
console.log(age)
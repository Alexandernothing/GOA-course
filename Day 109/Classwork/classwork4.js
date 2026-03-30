// 4. შექმენით სია სადაც შეინახავთ სტრინგებს,შენი დავალებაა რომ დაითვალო რამდენჯერ მეორდება სიაში ისეთი ელემენტი რომლის სიგრძე მეტია 4 ზე

let list = ["kjhg", "iuyg", "k", "mjugv", "abcdefg"]
let count = 0

list.forEach((i) => {
    if(i.length > 4) {
        count++
    }
})
console.log(count)
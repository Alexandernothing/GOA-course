// 1. შექმენით სია, სადაც შეინახავთ 10 სახელს. ამ სიის თითოეული ელემენტი გამოიტანეთ ოღონდ ელემენტების გამოტანა დაიწყეთ ბოლო ინდექსიდან.

let list = ["aleqsandre", "andria", "giorgi", "nika", "ika", "nino", "taso", "ana", "tamari"]

for(let i = list.length - 1;i >= 0;i = i -1) {
    console.log(list[i])
}
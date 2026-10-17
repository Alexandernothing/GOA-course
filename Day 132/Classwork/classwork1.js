/*
    შექმენი მასივი სადაც შეინახავ ადამიანის სახელებს , html ში შექმენი დივი და წამოიღე ჯს ში

    შენი დავალებაა რომ ამ დივში დაარენდერო სიაში მყოფი თითოეული სახელი p თეგების სახით
*/

let box = document.querySelector("div")

let names = ["Dato", "Nini", "Ika", "Taso"]

names.forEach(i => {
    let p = document.createElement("p")
    p.textContent = i

    box.append(p)
})
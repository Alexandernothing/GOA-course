/*
    2)საიტზე შექმენი ღილაკი ინფუთი და ერთ დივი

    წამოიღე სამივე ჯს ში

    თქვენი დავალებაა რომ ინფუთში ჩაწერილი მნიშვნელობა დაემატოს დივში h1 სახით

    გამოიყენეთ eventlistener , createElement , append , push , forEach ამ დავალების შესასრულებლად , ანუ ყოველ დაჭერაზე ემატება ელემენტები მასივში და მერე ეს სია უნდა დაარენდეროთ ყოველ დაკლიკებაზე
*/

let btn = document.querySelector("button")
let inp = document.querySelector("input")
let box = document.querySelector("div")

let list = []

btn.addEventListener("click", () => {
    let h1 = document.createElement("h1")
    h1.textContent = inp.value

    list.push(h1)

    list.forEach(i => {
        box.append(i)
    })

    inp.value = ""
})
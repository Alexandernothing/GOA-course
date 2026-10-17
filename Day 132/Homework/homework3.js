/*
    3)შექმენი:
    - input, რომელშიც მომხმარებელი შეიყვანს სახელს;
    - ღილაკი Add;
    - ცარიელი ul სიის გამოსატანად.
    JavaScript-ში შექმენი:
    let names = [];


    მოთხოვნები:
    1. მომხმარებელმა input-ში უნდა შეიყვანოს სახელი.
    2. ღილაკზე დაჭერისას შეყვანილი სახელი დაამატე names მასივში.
    3. მასივის ყველა სახელი გამოიტანე li ელემენტებში.
    4. ყოველი დამატების შემდეგ გვერდზე უნდა ჩანდეს სრული სია და არა მხოლოდ ბოლო სახელი.
    5. დამატების შემდეგ გაასუფთავე input.
    მაგალითი: მომხმარებელი შეიყვანს Nika-ს, დააჭერს ღილაკს, შემდეგ შეიყვანს Ana-ს და ისევ დააჭერს.
    შედეგი:
    - Nika
    - Ana
*/

let input = document.querySelector("input")
let btn = document.querySelector("button")
let list = document.querySelector("ul")

let names = []

btn.addEventListener("click", () => {
    names.push(input.value)

    let li = document.createElement("li")

    names.forEach(i => {
        li.textContent = i
        list.append(li)
    })

    input.value = ""
})
/*
    2)HTML-ში შექმენი სამი ღილაკი:
    - Apple
    - Banana
    - Orange
    ასევე შექმენი ცარიელი ul ელემენტი.
    JavaScript-ში შექმენი:
    let fruits = [];


    მოთხოვნები:
    1. Apple ღილაკზე დაჭერისას მასივში დაამატე "Apple".
    2. Banana ღილაკზე დაჭერისას დაამატე "Banana".
    3. Orange ღილაკზე დაჭერისას დაამატე "Orange".
    4. ყოველი დაჭერის შემდეგ დაარენდერე მასივში არსებული ყველა ხილი.
    5. ერთი და იმავე ღილაკის რამდენჯერმე დაჭერაც შესაძლებელი უნდა იყოს.
    მაგალითად, თუ მომხმარებელი დააჭერს Apple-ს, შემდეგ Orange-ს და ბოლოს Apple-ს, სიაში უნდა გამოჩნდეს:
    - Apple
    - Orange
    - Apple
*/

let app = document.getElementById("apple")
let ban = document.getElementById("banana")
let ora = document.getElementById("orange")
let list = document.querySelector("ul")

let fruits = []

app.addEventListener("click", () => {
    fruits.push("Apple")

    let li = document.createElement("li")

    fruits.forEach(i => {
        li.textContent = i
        list.append(li)
    })
})

ban.addEventListener("click", () => {
    fruits.push("Banana")

    let li = document.createElement("li")

    fruits.forEach(i => {
        li.textContent = i
        list.append(li)
    })
})

ora.addEventListener("click", () => {
    fruits.push("Orange")

    let li = document.createElement("li")

    fruits.forEach(i => {
        li.textContent = i
        list.append(li)
    })
})
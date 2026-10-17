/*
    4)შექმენი სამი ღილაკი:
    - +5 Points
    - +10 Points
    - +20 Points
    და ცარიელი ul ელემენტი.
    JavaScript-ში შექმენი:
    let scores = [];


    მოთხოვნები:
    1. +5 Points ღილაკზე დაჭერისას დაამატე რიცხვი 5.
    2. +10 Points ღილაკზე დაჭერისას დაამატე რიცხვი 10.
    3. +20 Points ღილაკზე დაჭერისას დაამატე რიცხვი 20.
    4. თითოეული ქულა გამოიტანე ცალკე li ელემენტში.
    5. სიის ქვემოთ გამოიტანე ყველა ქულის ჯამიც.
    მაგალითად, თუ მომხმარებელი დააჭერს +5, შემდეგ +20 და ბოლოს +10 ღილაკს, გვერდზე გამოჩნდეს:
    - 5 points
    - 20 points
    - 10 points
*/

let scores = []

let plusFive = document.getElementById("five")
let plusTen = document.getElementById("ten")
let plusTwenty = document.getElementById("twenty")
let list = document.querySelector("ul")
let para = document.querySelector("p")
let sum = 0

plusFive.addEventListener("click", () => {
    scores.push("5 points")

    let li = document.createElement("li")

    scores.forEach(i => {
        li.textContent = i
        list.append(li)
    })

    sum += 5
    para.textContent = `The sum is: ${sum}`
})

plusTen.addEventListener("click", () => {
    scores.push("10 points")

    let li = document.createElement("li")

    scores.forEach(i => {
        li.textContent = i
        list.append(li)
    })

    sum += 10
    para.textContent = `The sum is: ${sum}`
})

plusTwenty.addEventListener("click", () => {
    scores.push("20 points")

    let li = document.createElement("li")

    scores.forEach(i => {
        li.textContent = i
        list.append(li)
    })

    sum += 20
    para.textContent = `The sum is: ${sum}`
})
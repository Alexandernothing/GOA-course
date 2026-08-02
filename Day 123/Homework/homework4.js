/*
4)შექმენი ნათურის ემოჯი:

💡

დაჭერისას:

პირველი დაჭერა → 🟡 (ჩართული)
მეორე დაჭერა → ⚫ (გამორთული)

ბონუსი: შეიცვალოს გვერდის background-იც.

გამოგადგებათ toggle იც
*/

let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let p3 = document.querySelector(".p3")

p2.style.display = "none"

function turnOn() {
    let on = document.body.classList.toggle("onn")

    if(on) {
        p2.style.display = "block"
        p3.style.display = "none"
        document.body.style.backgroundColor = "yellow"
    } 
    else {
        p2.style.display = "none"
        p3.style.display = "block"
        document.body.style.backgroundColor = "black"
        p3.style.color = "white"    
    }
}
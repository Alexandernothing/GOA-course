/*
10)გააკეთე ვარსკვლავი ⭐.

onclick → ⭐⭐⭐⭐⭐ (ერთი ვარსკვლავით იზრდება).
მაქსიმუმ 5 ვარსკვლავი.
ondblclick → ყველა ვარსკვლავი წაიშალოს.
*/

let star = document.querySelector("h1")

function add() {
    if(star.textContent.length < 5) {
        star.textContent += "⭐"
    }
}

function reset() {
    star.textContent = "⭐"
}
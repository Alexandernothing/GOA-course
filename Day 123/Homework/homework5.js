/*
5)Double Click Reset 🔄

დავალება:
გააკეთე Counter.

onclick → +1
ondblclick → ქაუნთერი გახდეს 0.
*/

let num = document.querySelector("h1")
let but = document.querySelector("button")

let count = 0

function add() {
    count++
    num.textContent = count
}

function reset() {
    count = 0
    num.textContent = count
}
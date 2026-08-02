/*
8)დავალება:
შექმენი წითელი ბურთი (div).

onclick →ყოველ ჯერზე ზომა გაიზარდოს 10px-ით.
ondblclick → გასკდეს (გაქრეს).
*/

let ball = document.querySelector("div")
let count = 1

function grow() {
    count += 0.5
    ball.style.transform = `scale(${count})`
}

function pop() {
    ball.style.transform = "scale(0)"
    ball.style.opacity = "0"
}
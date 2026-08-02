/*
2)
შექმენი პროდუქტის ბარათი.

თავიდან:

ფოტო
პროდუქტის სახელი

onmouseover

გამოჩნდეს ფასი.
ღილაკი "Buy Now".
ბარათს დაემატოს ჩრდილი.

onmouseout

ფასი და ღილაკი დაიმალოს.
ჩრდილი გაქრეს.
*/

let box = document.querySelector("div")
let price = document.querySelector("span")
let butt = document.querySelector("button")

function on() {
    price.style.display = "block"
    butt.style.display = "block"
    box.style.boxShadow = "10px 10px 5px black"
}

function off() {
    price.style.display = "none"
    butt.style.display = "none"
    box.style.boxShadow = "none"
}
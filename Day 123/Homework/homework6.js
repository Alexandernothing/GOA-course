/*
6)დავალება:
შექმენი კვადრატი.

onclick → background გახდეს ლურჯი.
ondblclick → background გახდეს წითელი.
*/

let square = document.querySelector("div")

function clickOnce() {
    square.style.backgroundColor = "blue"
}

function clickDouble() {
    square.style.backgroundColor = "red"
}
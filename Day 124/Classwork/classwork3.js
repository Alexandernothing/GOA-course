/*
3)შექმენი div.

onmousedown
ფერი გახდეს წითელი.
ტექსტი გახდეს "Pressed".

onmouseup
ფერი გახდეს მწვანე.
ტექსტი გახდეს "Released".

onwheel
ყოველ დატრიალებაზე div-ის ზომა გაიზარდოს 10px-ით.
*/

let box = document.querySelector("div")
let para = document.querySelector("p")

function down() {
    box.style.backgroundColor = "red"
    para.textContent = "Pressed"
}

function up() {
    box.style.backgroundColor = "green"
    para.textContent = "Released"
}

let currentSize = 200
function wheel() {
    currentSize += 10
    box.style.width = currentSize + "px"
    box.style.height = currentSize + "px"
}
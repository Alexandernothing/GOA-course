/*
6)Energy Bar

შექმენი div.

onwheel ზემოთ → სიგანე გაიზარდოს 10px-ით.
onwheel ქვემოთ → სიგანე შემცირდეს 10px-ით.
onmouseover → ფერი გახდეს ლურჯი.
onmouseout → ფერი დაბრუნდეს საწყისზე.
*/

let energyBar = document.querySelector("div")
let size = 450

function wheel(event) {
    if(event.deltaY < 0) {
        size += 10
        energyBar.style.width = `${size}px`
    }
    else {
        size -= 10
        energyBar.style.width = `${size}px`
    }
}

function over() {
    energyBar.style.backgroundColor = "blue"
}

function out() {
    energyBar.style.backgroundColor = "rgb(95, 160, 97)"
}
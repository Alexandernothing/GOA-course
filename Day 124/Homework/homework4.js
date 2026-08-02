/*
4)შექმენი ბურთი (div).

onmouseover → ოდნავ გაიზარდოს.
onmouseout → დაუბრუნდეს საწყის ზომას.
onwheel → კიდევ უფრო გაიზარდოს ან შემცირდეს იმის მიხედვით, ბორბალი ზემოთ დატრიალდა თუ ქვემოთ.
*/

let circle = document.querySelector("div")
let size = 100

function over() {
    size += 20
    circle.style.height = `${size}px`
    circle.style.width = `${size}px`
}

function out() {
    size = 100
    circle.style.height = `100px`
    circle.style.width = `100px`
}

function wheel(event) {
    if(event.deltaY < 0) {
        size += 10
    } 
    else {
        size -= 10
    }
    circle.style.height = `${size}px`
    circle.style.width = `${size}px`
}
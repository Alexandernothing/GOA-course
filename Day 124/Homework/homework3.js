/*
3)შექმენი კვადრატი.

onwheel-ზე ყოველ დატრიალებაზე შეიცვალოს ფერი.
onmouseover-ზე დაემატოს ჩრდილი.
onmouseout-ზე ჩრდილი გაქრეს.
*/

let square = document.querySelector("div")

function wheel() {
    let color1 = Math.floor(Math.random() * 256)
    let color2 = Math.floor(Math.random() * 256)
    let color3 = Math.floor(Math.random() * 256)

    square.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
}

function over() {
    square.style.boxShadow = "10px 10px 5px grey"
}

function out() {
    square.style.boxShadow = "none"
}
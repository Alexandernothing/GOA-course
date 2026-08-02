/*
1)შექმენი div.

onmouseover → გახდეს მწვანე.
onmouseout → დაბრუნდეს საწყის ფერზე.
onmousedown → შემცირდეს (scale).
onmouseup → დაუბრუნდეს ჩვეულებრივ ზომას.
*/

let box = document.querySelector("div")

function over() {
    box.style.backgroundColor = "green"
}

function out() {
    box.style.backgroundColor = "magenta"
}

function down() {
    box.style.transform = "scale(0.8)"
}

function up() {
    box.style.transform = "scale(1)"
}
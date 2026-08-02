/*
7)ერთ div-ზე დაამატე ყველა ეს event:

onmouseover → გამოჩნდეს "Mouse Over".
onmouseout → "Mouse Out".
onmousedown → "Mouse Down".
onmouseup → "Mouse Up".
onwheel → "Wheel Up" ან "Wheel Down" იმის მიხედვით, რომელი მიმართულებით დაატრიალეს ბორბალი.
*/

let box = document.querySelector("div")
let para = document.querySelector("p")

function over() {
    para.textContent = "Mouse Over"
}

function out() {
    para.textContent = "Mouse Out"
}

function down() {
    para.textContent = "Mouse Down"
}

function up() {
    para.textContent = "Mouse Up"
}

function wheel(event) {
    if(event.deltaY < 0) {
        para.textContent = "Wheel Up"
    }
    else {
        para.textContent = "Wheel Down"       
    }
}
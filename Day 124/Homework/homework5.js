/*
5)თავიდან გამოჩნდეს ტექსტი:

Move your mouse here
onmouseover → "Welcome!"
onmousedown → "Don't hold me 😅"
onmouseup → "Thanks!"
onmouseout → ისევ "Move your mouse here"
*/

let txt = document.querySelector("h1")

function over() {
    txt.textContent = "Welcome!"
}

function down() {
    txt.textContent = "Don't hold me 😅" 
}

function up() {
    txt.textContent = "Thanks!"
}

function out() {
    txt.textContent = "Move your mouse here" 
}
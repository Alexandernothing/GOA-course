/*
2)
ეკრანზე იყოს 😊.

onmouseover → 😄
onmouseout → 😊
onmousedown → 😠
onmouseup → 😎
*/

let emoji = document.querySelector("h1")

function over() {
    emoji.textContent = "😄"
}

function out() {
    emoji.textContent = "😊"  
}

function down() {
    emoji.textContent = "😠"
}

function up() {
    emoji.textContent = "😎"  
}
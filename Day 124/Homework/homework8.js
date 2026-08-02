/*
8)შექმენი დიდი div.

onmousedown → ფონი გახდეს ყვითელი (ხატვის რეჟიმი).
onmouseup → ფონი გახდეს თეთრი.
onmouseover → დაემატოს ლურჯი ჩარჩო.
onmouseout → ჩარჩო გაქრეს.
*/

let bigDiv = document.querySelector("div")

function down() {
    bigDiv.style.backgroundColor = "yellow"
}

function up() {
    bigDiv.style.backgroundColor = "white"
}

function over() {
    bigDiv.style.border = "5px solid blue"
}

function out() {
    bigDiv.style.border = "none"
}

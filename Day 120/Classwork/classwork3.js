/*
3)შექმენი დივი და მიეცი id box

შიგნით შექმენი h1 და ჩაწერე შიგნით hello

ასევე დივში შექმენით ღილაკი და პარაგრაფი და დატოვე ცარიელი

შენი დავალებაა რომ textContent ის დახმარებით შეავსო ცარიელი თეგები რაიმე ტექსტებით

ასევე დაამატე ამ დივში h2 თეგი რომელშიც ეწერება description

ამის შემდეგ დააკონსოლლოგეთ დივი და ნახეთ საბოლოო შედეგი
*/

let boxDiv = document.getElementById('box')
let button = document.querySelector('#box button')
let p = document.querySelector('#box p')

button.textContent = "Click"
p.textContent = "Hi"

boxDiv.innerHTML += "<h2>description</h2>"

console.log(boxDiv)
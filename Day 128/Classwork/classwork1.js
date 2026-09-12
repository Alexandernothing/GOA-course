/*
    1)შექმენით ერთ h1 ჯს იდან html ში არ შექმნათ! და დაამატეთ body ში

    ამის შემდეგ შენი დავალებაა რომ ეს h1 გახდეს დღევანდელი თარიღი , გამოიტანე ლამაზად interpolation ის დახმარებით,ეწეროს წელი თვე რიცხვი , ასევე საათი წუთი და წამიც,გამოიტანეთ ლამაზად ყველაფერი
*/

let header = document.createElement("h1")
let body = document.body

body.append(header)

let date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

header.textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
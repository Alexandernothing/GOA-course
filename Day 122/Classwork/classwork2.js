/*
2)შექმენით პარაგრაფი და გამოიტანეთ საიტზე

თქევნი დავალებაა მომხმარებელს შემოატანინო ფერიდ ა რა ფერსაც შემოიტანს იმ ფერის გახდეს ტექსტი
*/

let body = document.body
let txt = document.createElement("p")
txt.textContent = "The standard pattern on a zebra's coat is completely unique to each individual, acting much like a human fingerprint."
body.appendChild(txt)

let txtColor = prompt("What color should the text be?")
txt.style.color = `${txtColor}`
/*
7)ეკრანზე იყოს ტექსტი:

Password Hidden

onclick → გამოჩნდეს ********
ondblclick → გამოჩნდეს ნამდვილი პაროლი.
*/

let password = document.querySelector("p")

function hide() {
    password.textContent = "********"
}

function pass() {
    password.textContent = "Goal-oriented academy"
}
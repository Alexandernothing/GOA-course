/*
    3)ეკრანზე იყოს დიდი ღილაკი "PRESS SPACE".

    Space დაჭერისას → ღილაკი შეიცვალოს
    onkeydown → "Pressed!"
    onkeyup → "Release!"
    თუ სხვა ღილაკს დააჭერს → "Wrong key!"
*/

let button = document.querySelector("button")

document.onkeydown = (event) => {
    if(event.key === " ") {
        button.textContent = "Pressed!"
    }
    else {
        button.textContent = "Wrong key!"
    }
}

document.onkeyup = (event) => {
    button.textContent = "Release!"
}
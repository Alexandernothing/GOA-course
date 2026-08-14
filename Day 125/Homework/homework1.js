/*
    1)პატარა Keyboard Game

    ეკრანზე იყოს პერსონაჟი 🧙‍♂️.

    ArrowRight → მარჯვნივ გადაადგილდეს
    ArrowLeft → მარცხნივ
    ArrowUp → ზემოთ
    ArrowDown → ქვემოთ
    ღილაკზე დაჭერისას მოძრაობა დაიწყოს
    ღილაკის აშვებისას მოძრაობა შეწყდეს
*/

let image = document.querySelector("img")
image.style.transition = "0.2s"

let right = 0
let up = 0

document.onkeydown = (event) => {
    if(event.key === "ArrowRight") {
        right += 15
        image.style.left = `${right}px`
        image.style.transform = "rotate(90deg)"
    }
    else if(event.key === "ArrowLeft") {
        right -= 15
        image.style.left = `${right}px`
        image.style.transform = "rotate(270deg)"
    }
    else if(event.key === "ArrowUp") {
        up += 15
        image.style.bottom = `${up}px`
        image.style.transform = "rotate(360deg)"
    }
    else if(event.key === "ArrowDown") {
        up -= 15
        image.style.bottom = `${up}px`
        image.style.transform = "rotate(180deg)"
    }
}
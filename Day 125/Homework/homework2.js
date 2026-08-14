/*
    2)ეკრანზე იყოს რამდენიმე ღილაკი:

    A S D F G

    კლავიატურაზე შესაბამისი ღილაკის დაჭერისას:

    onkeydown → შესაბამისი ღილაკი გახდეს აქტიური
    onkeyup → დაბრუნდეს ჩვეულებრივ მდგომარეობაში

    მაგალითად:

    A დაჭერილია → 🎹 A ღილაკი ლურჯდება
    A აშვებულია → ჩვეულებრივდება.
*/

let head1 = document.querySelector("#head1")
let head2 = document.querySelector("#head2")
let head3 = document.querySelector("#head3")
let head4 = document.querySelector("#head4")
let head5 = document.querySelector("#head5")

document.onkeydown = (event) => {
    if(event.key === "A" || event.key === "a") {
        head1.style.color = "rgb(191, 102, 59)"
    }
    else if(event.key === "S" || event.key === "s") {
        head2.style.color = "rgb(83, 154, 198)"
    }
    else if(event.key === "D" || event.key === "d") {
        head3.style.color = "rgb(157, 4, 50)"
    }
    else if(event.key === "F" || event.key === "f") {
        head4.style.color = "rgb(222, 246, 41)"
    }
    else if(event.key === "G" || event.key === "g") {
        head5.style.color = "rgb(173, 252, 220)"
    }
}

document.onkeyup = (event) => {
    if(event.key === "A" || event.key === "a") {
        head1.style.color = "black"
    }
    else if(event.key === "S" || event.key === "s") {
        head2.style.color = "black"
    }
    else if(event.key === "D" || event.key === "d") {
        head3.style.color = "black"
    }
    else if(event.key === "F" || event.key === "f") {
        head4.style.color = "black"
    }
    else if(event.key === "G" || event.key === "g") {
        head5.style.color = "black"
    }
}

/*
    4)ეკრანზე იყოს წითელი, ყვითელი და მწვანე წრე.

    R → წითელი აინთოს
    Y → ყვითელი
    G → მწვანე
*/

let body = document.body
let red = document.querySelector(".red")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")

document.onkeydown = (event) => {
    if(event.key === "R") {
        body.style.backgroundColor = "red"
        red.style.border = "3px solid black"
    }
    else if(event.key === "Y") {
        body.style.backgroundColor = "yellow"
        yellow.style.border = "3px solid black"
    }
    else if(event.key === "G") {
        body.style.backgroundColor = "green"
        green.style.border = "3px solid black"
    }
}

document.onkeyup = (event) => {
    if(event.key === "R") {
        body.style.backgroundColor = "white"
        red.style.border = "none"
    }
    else if(event.key === "Y") {
        body.style.backgroundColor = "white"
        yellow.style.border = "none"
    }
    else if(event.key === "G") {
        body.style.backgroundColor = "white"
        green.style.border = "none"
    }
}
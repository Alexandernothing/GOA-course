//  1)წინაზე მოცემულ პროექტში საათში ჩაამატე საათი როგორიც ზემოთ ფოტოზეა მოცემული რომელიც მუშაობს და ყოველ წამში ახლდება

let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let color3 = document.querySelector(".color3")
let color4 = document.querySelector(".color4")
let color5 = document.querySelector(".color5")

let black = document.querySelector(".black")
let blue = document.querySelector(".blue")
let pink = document.querySelector(".pink")
let purple = document.querySelector(".purple")
let red = document.querySelector(".red")

let time = document.querySelector(".para1")

setInterval(() => {
    let date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if(seconds < 10) {
        seconds = `0${seconds}`
    }
    else if(minutes < 10) {
        minutes = `0${minutes}`
    }
    else if(hours < 10) {
        hours = `0${hours}`
    }

    time.textContent = `${hours}:${minutes}:${seconds}`
})

color1.addEventListener("click", () => {
    blue.style.display = "none"
    pink.style.display = "none"
    purple.style.display = "none"
    red.style.display = "none"
    black.style.display = "block"
})

color2.addEventListener("click", () => {
    blue.style.display = "none"
    pink.style.display = "none"
    purple.style.display = "none"
    black.style.display = "none"
    red.style.display = "block"
})

color3.addEventListener("click", () => {
    black.style.display = "none"
    pink.style.display = "none"
    purple.style.display = "none"
    red.style.display = "none"
    blue.style.display = "block"
})

color4.addEventListener("click", () => {
    blue.style.display = "none"
    pink.style.display = "none"
    red.style.display = "none"
    black.style.display = "none"
    purple.style.display = "block"
})

color5.addEventListener("click", () => {
    blue.style.display = "none"
    black.style.display = "none"
    purple.style.display = "none"
    red.style.display = "none"
    pink.style.display = "block"
})
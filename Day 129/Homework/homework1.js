// 1)გააკეთეთ წინაზე მოცემული საათის ფუნქციონალი თავიდან ბოლომდე

let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let color3 = document.querySelector(".color3")
let color4 = document.querySelector(".color4")
let color5 = document.querySelector(".color5")

let mainImg = document.querySelector(".black")
let colorParent = document.querySelector(".color-parent")
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

colorParent.addEventListener("click", (event) => {
    if(event.target.classList.contains("color1")) {
        mainImg.src = "homework1 imgs/black.png"
    }
    if(event.target.classList.contains("color2")) {
        mainImg.src = "homework1 imgs/red.png"
    }
    if(event.target.classList.contains("color3")) {
        mainImg.src = "homework1 imgs/blue.png"
    }
    if(event.target.classList.contains("color4")) {
        mainImg.src = "homework1 imgs/purple.png"
    }
    if(event.target.classList.contains("color5")) {
        mainImg.src = "homework1 imgs/pink.png"
    }
})

let timeBUtton = document.querySelector(".button1")

timeBUtton.addEventListener("click", (event) => {
    if(time.classList.contains("hide")) {
        time.style.display = "none"
        time.classList.toggle("hide")
    }
    else {
        time.style.display = "block"
        time.classList.toggle("hide")
    }
})

let heartRate = document.querySelector(".heart")
let heartButton = document.querySelector(".button2")

heartButton.addEventListener("click", (event) => {
    if(heartRate.classList.contains("hide")) {
        heartRate.style.display = "block"
        heartRate.classList.toggle("hide")
    }
    else {
        heartRate.style.display = "none"
        heartRate.classList.toggle("hide")
    }
})
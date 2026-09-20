let backArrow = document.querySelector(".img1")
let mainImg = document.querySelector(".img2")
let forwardArrow = document.querySelector(".img3")

let index = 0
let animals = ["classwork1 imgs/bull.jpg", "classwork1 imgs/giraffe.jpg", "classwork1 imgs/panda.jpg", "classwork1 imgs/tiger.jpg"]

forwardArrow.addEventListener("click", () => {
    index++

    if(index === animals.length) {
        index = 0
    }
    mainImg.src = animals[index]
})

backArrow.addEventListener("click", () => {
    index--

    if(index < 0) {
        index = animals.length - 1
    }
    mainImg.src = animals[index]
})
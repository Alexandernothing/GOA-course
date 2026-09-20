let arrowBack = document.querySelector(".back")
let arrowForward = document.querySelector(".forward")
let mainImg = document.querySelector(".country")
let allDots = document.querySelectorAll(".dot")

let countries = ["homework2 imgs/france.jpg", "homework2 imgs/germany.jpg", "homework2 imgs/greece.jpg", "homework2 imgs/italy.jpg", "homework2 imgs/japan.jpg", "homework2 imgs/mexico.jpg", "homework2 imgs/spain.jpg", "homework2 imgs/turkey.jpg", "homework2 imgs/uk.jpg", "homework2 imgs/usa.jpg"]
let index = 0

arrowForward.addEventListener("click", () => {
    allDots[index].classList.remove("d1")
    index++

    if(index === countries.length) {
        index = 0
    }

    mainImg.src = countries[index]
    allDots[index].classList.add("d1")
})

arrowBack.addEventListener("click", () => {
    allDots[index].classList.remove("d1")
    index--

    if(index < 0) {
        index = countries.length - 1
    }

    mainImg.src = countries[index]
    allDots[index].classList.add("d1")
})
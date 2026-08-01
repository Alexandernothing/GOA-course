// 1) შექმენით მსგავსი დიზაინის მქონე ქაუნთერი , ასევე დაუმათეთ ფუნქციონალი რაც გაკვეთლზე გავაკეთეთ(დაუმათეთ ფუნქციონალი როდესაც რიცხვიდ ადებითი იქნებბა გახდეს მწვანე ,როდესაც უარყოფითი გახდეს წითელი

let num = document.getElementsByTagName("h1")[0]

let count = 0

function checkColor() {
    if (count > 0) {
        num.style.color = "green"
    } 
    else if (count < 0) {
        num.style.color = "red"
    } 
    else {
        num.style.color = "white"
    }
}

function plus() {
    count++
    num.textContent = count
    checkColor()
}

function minus() {
    count--
    num.textContent = count
    checkColor()
}

function zero() {
    count = 0
    num.textContent = 0
    checkColor()
}
/*
    1)შექმენით ინფუთები ---> პროდუქტის სახელისთვის , პროდუქტის ფასისთვის  , ფოტოს მისამართისთვის , პროდუქტის აღწერისთვის(უნდა იყოს სამი ტიპის აღწერა -->tecnic , housthings, clothes , ასევე add to cart ღილაკი

    ღილაკზე დაჭერისას უნდა დაამატო თითოეული პროეუქტი სიაში ობიექტის სახით და გამოიტანო ეკრანზე ყველა პროდუქტი(დაამატეთ სტილები და გაალამაზეთ პროექტი)

    დაამატე პროექტს ვალიდაციებიც 

    =========

    ასევე დაამატეთ კიდევ ოთხი ღილაკი --- 1)show all -- რომელიც გამოაჩენს ყველა პროდუქტს  2)show clothes 3)show tecnics 4) show housethings

    თოთოეული ღილაკზე დაჭერის შედეგად გამოჩნდეს მხოლოდ ტანსაცმელი , მხოლოდ სახლის ნივთები , მხოლოდ ტექნიკა , და show all ზე გამოჩნდეს ისევ ყველა ნივთი რაც აქამდე ჩაამატე სიაში
*/

let form = document.querySelector("form")
let add = document.getElementById("btn1")
let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".inp3")
let inp4 = document.querySelector(".inp4")
let error1 = document.querySelector(".p1")
let error2 = document.querySelector(".p2")
let error3 = document.querySelector(".p3")
let error4 = document.querySelector(".p4")
let box = document.querySelector(".div1")
let list = []

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let correct = true

    let obj = {
        name: event.target.name.value,
        price: event.target.price.value,
        img: event.target.img.value,
        discription: event.target.discription.value
    }

    let { name, price, img, discription } = obj

    if(name === "") {
        error1.textContent = "Input can't be blank"
        inp1.style.outline = "3px solid red"
        correct = false
    }
    else if(name.length < 3 || name.length > 20) {
        error1.textContent = "Input must contain min 3 and max 20 characters"
        inp1.style.outline = "3px solid red"
        correct = false
    } 
    else {
        if(name[0] === " ") {
            error1.textContent = "Input mustn't start with space"
            inp1.style.outline = "3px solid red"
            correct = false        
        }
        else {
            error1.textContent = ""
            inp1.style.outline = "none"
            correct = true                
        }
    }

    let numSym = "1234567890."
    let priceError = false
    let correctInp = true

    if(price === "") {
        error2.textContent = "Input can't be blank"
        inp2.style.outline = "3px solid red"
        correct = false
    }
    else {
        for(let i of price) {
            if(!numSym.includes(i)) {
                correctInp = false
            }
        }

        if(!correctInp) {
            error2.textContent = "Input must only contain numbers, or ."
            inp2.style.outline = "3px solid red"
            correct = false           
        } 
        else if(!"1234567890".includes(price[0])) {
            error2.textContent = "Input must start with a number"
            inp2.style.outline = "3px solid red"
            correct = false           
        }
        else if(price.includes(" ")) {
            error2.textContent = "Input mustn't contain space"
            inp2.style.outline = "3px solid red"
            correct = false                 
        }
        else {
            if(price.includes(".")) {
                let splitted = price.split(".")
                let afterCheck = splitted[1]
                let hasNums = "1234567890"
                let allNums = true

                if(!afterCheck || afterCheck.length !== 2) {
                    allNums = false
                }
                else {
                    for(let i of afterCheck) {
                        if(!hasNums.includes(i)) {
                            allNums = false
                        }
                    }
                }

                if(!allNums) {
                    error2.textContent = "Input must contain 2 numbers after ."
                    inp2.style.outline = "3px solid red"
                    correct = false                        
                    priceError = true
                }
            }

            if(!priceError) {
                error2.textContent = ""
                inp2.style.outline = "none"
            }
        }
    }
    
    if(img === "") {
        error3.textContent = "Input can't be blank"
        inp3.style.outline = "3px solid red"
        correct = false                                 
    }
    else {
        error3.textContent = ""
        inp3.style.outline = "none"
    }

    if(discription === "") {
        error4.textContent = "Input can't be blank"
        inp4.style.outline = "3px solid red"
        correct = false                                 
    }
    else {
        if(discription!== "tecnic" && discription!== "housthings" && discription!== "clothes") {
            error4.textContent = "Input value must be exactly tecnic, housthings or clothes"
            inp4.style.outline = "3px solid red"
            correct = false                               
        }
        else {
            error4.textContent = ""
            inp4.style.outline = "none"
        }
    }

    if(correct) {
        let newObj = {
            name: name,
            price: price,
            img: img,
            discription: discription
        }

        list.push(newObj)

        form.reset()

        display()
    }
    else {
        console.log("Contains errors")
    }
})

function display() {
    box.innerHTML = ""

    list.forEach((i) => {
        let parent = document.createElement("div")
        parent.classList.add("parent-div")

        let head = document.createElement("h1")
        head.textContent = i.name

        let secondPrice = document.createElement("h2")
        secondPrice.textContent = i.price

        let image = document.createElement("img")
        image.src = i.img
        image.style.width = "150px"

        let dis = document.createElement("h2")
        dis.textContent = i.discription;

        parent.append(head, secondPrice, image, dis)
        box.append(parent)
    })
}
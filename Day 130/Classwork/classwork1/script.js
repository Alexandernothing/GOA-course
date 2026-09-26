let result = document.querySelector("h1")
let numbers = document.querySelectorAll(".nums")
let operator = document.querySelectorAll(".operators")
let reset = document.querySelector(".res")
let total = document.querySelector(".total")
let dot = document.querySelector(".dot")
let dele = document.querySelector(".del")

let firstNum = ""
let oper = ""
let secondNum = ""

numbers.forEach((item) => {
    item.addEventListener("click", () => {
        if(oper === "") {
            firstNum += item.textContent
            result.textContent = firstNum
        }
        else {
            secondNum += item.textContent
            result.textContent = secondNum
        }
    })
})

operator.forEach((item) => {
    item.addEventListener("click", () => {
        oper = item.textContent
    })
})

total.addEventListener("click", () => {
    let res
    if(oper === "+") {
        res = Number(firstNum) + Number(secondNum)
    }
    else if(oper === "/") {
        res = Number(firstNum) / Number(secondNum)
    }
    else if(oper === "X") {
        res = Number(firstNum) * Number(secondNum)
    }
    else if(oper === "-") {
        res = Number(firstNum) - Number(secondNum)
    }

    result.textContent = res

    console.log(res)
    firstNum = ""
    oper = ""
    secondNum = ""
})
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

    firstNum = ""
    oper = ""
    secondNum = ""
})

dot.addEventListener("click", () => {
    if(oper === "") {
        if(!firstNum.includes(".")) {
            if(firstNum === "") {
                firstNum = "0."
            }
            else {
                firstNum += "."
            }
            result.textContent = firstNum
        }
    }
    else {
        if(!secondNum.includes(".")) {
            if(secondNum === "") {
                secondNum = "0."
            }
            else {
                secondNum += "."
            }
            result.textContent = secondNum
        }
    }
})

reset.addEventListener("click", () => {
    firstNum = ""
    oper = ""
    secondNum = ""
    result.textContent = "0"
})

dele.addEventListener("click", () => {
    if(oper === "") {
        if(firstNum !== "") {
            firstNum = firstNum.slice(0, -1)
            if(firstNum === "") {
                result.textContent = "0"
            }
            else {
                result.textContent = firstNum
            }
        }
    }
    else {
        if(secondNum !== "") {
            secondNum = secondNum.slice(0, -1)
            if(secondNum === "") {
                result.textContent = "0"
            }
            else {
                result.textContent = secondNum
            }
        }
        else {
            oper = ""
        }
    }
})
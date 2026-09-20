let button = document.querySelector("#button")
let cardNum = document.querySelector("h3")
let Name = document.querySelector(".para1")
let date = document.querySelector(".para2")
let dateM = document.querySelector(".month")
let dateY = document.querySelector(".year")
let cvc = document.querySelector(".para3")
let userName = document.getElementById("cardholder")
let userCardNum = document.getElementById("cardnum")
let dateMM = document.getElementById("mm")
let dateYY = document.getElementById("yy")
let userCvc = document.getElementById("cvc")

let error1 = document.querySelector(".formatLett")
let error2 = document.querySelector(".blankName")
let error3 = document.querySelector(".formatNum")
let error4 = document.querySelector(".blankNum")
let error5 = document.querySelector(".blankDate")
let error6 = document.querySelector(".formatDate")
let error7 = document.querySelector(".blankCvc")
let error8 = document.querySelector(".formatCvc")
let error9 = document.querySelector(".invalidCvc")
let error10 = document.querySelector(".invalidNum")
let error11 = document.querySelector(".formatYM")
let error12 = document.querySelector(".formatMM")
let error13 = document.querySelector(".formatZero")

let alphabet = "qwertyuioplkjhgfdsazxcvbnmMNBVCXZAQWSEDRFTGYHUJIKOLP "
let nums = "1234567890"
let numsSpace = "1234567890 "

button.addEventListener("click", (event) => {
    event.preventDefault()

    error1.style.display = "none"
    error2.style.display = "none"
    error3.style.display = "none"
    error4.style.display = "none"
    error5.style.display = "none"
    error6.style.display = "none"
    error7.style.display = "none"
    error8.style.display = "none"
    error9.style.display = "none"
    error10.style.display = "none"
    error11.style.display = "none"
    error12.style.display = "none"   
    error13.style.display = "none"

    userName.style.borderColor = "#dfdee0"
    userCardNum.style.borderColor = "#dfdee0"
    dateMM.style.borderColor = "#dfdee0"
    dateYY.style.borderColor = "#dfdee0"
    userCvc.style.borderColor = "#dfdee0"

    let result = true

    if(userName.value.length === 0) {
        error2.style.display = "block"
        userName.style.borderColor = "red"
        result = false
    } 
    else {
        for(let i of userName.value) {
            if(!alphabet.includes(i)) {
                error1.style.display = "block"
                userName.style.borderColor = "red"
                result = false
                break
            }
        }
    }

    if(userCardNum.value.length === 0) {
        error4.style.display = "block"
        userCardNum.style.borderColor = "red"
        result = false
    } 
    else {
        let isInvalidNum = false
        for(let i of userCardNum.value) {
            if (!numsSpace.includes(i)) {
                isInvalidNum = true
                result = false
                break
            }
        }

        if(isInvalidNum) {
            error3.style.display = "block"
            userCardNum.style.borderColor = "red"
            result = false
        } 
        else {
            let numCount = 0
            for(let ii of userCardNum.value) {
                if(nums.includes(ii)) {
                    numCount++
                }
            }

            if(numCount !== 16) {
                error10.style.display = "block"
                userCardNum.style.borderColor = "red"
                result = false
            }
        }
    }

    if(dateMM.value.length === 0 || dateYY.value.length === 0) {
        error5.style.display = "block"
        result = false
        if(dateMM.value.length === 0) {
            dateMM.style.borderColor = "red"
            result = false
        }
        if(dateYY.value.length === 0) {
            dateYY.style.borderColor = "red"
            result = false
        }
    } 
    else {
        let validMM = true
        let validYY = true

        for(let i of dateMM.value) {
            if(!nums.includes(i)) {
                validMM = false
                break
            }
        }

        for(let i of dateYY.value) {
            if(!nums.includes(i)) {
                validYY = false
                break
            }
        }

        if(!validYY || !validMM) {
            error6.style.display = "block"
            result = false
            
            if (!validMM) {
                dateMM.style.borderColor = "red"
                result = false
            }
            if (!validYY) {
                dateYY.style.borderColor = "red"  
                result = false 
            }     
        }
        else if(dateMM.value.length !== 2 || dateYY.value.length !== 2) {
            error11.style.display = "block"
            result = false

            if(dateMM.value.length !== 2) {
                dateMM.style.borderColor = "red"
                result = false
            }
            if(dateYY.value.length !== 2) {
                dateYY.style.borderColor = "red"
                result = false
            }

            if(dateMM.value.length === 1) {
                error13.style.display = "block"
                dateMM.style.borderColor = "red"
                result = false
            }
        }
        else {
            if(dateMM.value < 1 || dateMM.value > 12) {
                error12.style.display = "block"
                dateMM.style.borderColor = "red"
                result = false
            }
        }
    }

    if(userCvc.value.length === 0) {
        error7.style.display = "block"
        userCvc.style.borderColor = "red"
        result = false
    } 
    else {
        let isValidNum = true
        for(let i of userCvc.value) {
            if(!nums.includes(i)) {
                isValidNum = false
                break
            }
        }

        if(!isValidNum) {
            error8.style.display = "block"
            userCvc.style.borderColor = "red"
            result = false
        }
        else if(userCvc.value.length !== 3) {
            error9.style.display = "block"
            userCvc.style.borderColor = "red"
            result = false
        }
    } 

    if(result) {
        Name.textContent = userName.value
        cardNum.textContent = userCardNum.value
        dateM.textContent = dateMM.value
        dateY.textContent = dateYY.value
        cvc.textContent = userCvc.value
    }
})
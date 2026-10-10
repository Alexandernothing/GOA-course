let form = document.querySelector("form")
let nameError = document.querySelector(".name-errors")
let emailError = document.querySelector(".email-errors")
let passError = document.querySelector(".pass-errors")
let cnfPassError = document.querySelector(".confirm-pass")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let result = true

    let formInfo = {
        name: event.target.username.value,
        email: event.target.email.value,
        pass: event.target.pass.value,
        cnfPass: event.target.cnfPass.value,
    }

    let formBox = {
        nameB: event.target.username,
        emailB: event.target.email,
        passB: event.target.pass,
        cnfPassB: event.target.cnfPass,
    }


    let { name, email, pass, cnfPass } = formInfo

    let nums = "1234567890"
    let symbol = "!@#$_-&"
    let letter = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM"

    let hasNums = false
    let hasSymbol = false


    let nameCount = 0

    for(let i of name) {
        if(nums.includes(i)) {
            hasNums = true
        }
        else if(symbol.includes(i)) {
            hasSymbol = true
        }
        else if(letter.includes(i)) {
            nameCount++
        }
    }

    if(name.length === 0) {
        nameError.textContent = "Input can't be blank"
        result = false
        formBox.nameB.style.outline = "2px solid red"
    }
    else if(name.length < 5 || name.length > 15) {
        nameError.textContent = "Min 5 char and max 15 char"
        result = false
        formBox.nameB.style.outline = "2px solid red"
    }
    else if(nameCount < 4) {
        nameError.textContent = "Input must contain at least 4 letters"
        result = false
        formBox.nameB.style.outline = "2px solid red"
    } 

    else if(!hasNums) {
        nameError.textContent = "Input must contain at least one number(1234567890)"
        result = false
        formBox.nameB.style.outline = "2px solid red"
    }
    else if(!hasSymbol) {
        nameError.textContent = "Input must contain at least one of these symbols: !@#$_-&"
        result = false
        formBox.nameB.style.outline = "2px solid red"
    }
    else if(name.includes(" ")) {
        nameError.textContent = "Input must not contain space"     
        result = false  
        formBox.nameB.style.outline = "2px solid red" 
    }
    else {
        nameError.textContent = ""
        result = true
        formBox.nameB.style.outline = "1px solid rgba(166, 166, 252, 0.293)"
    }


    let emailFirst = false

    if(!letter.includes(email[0])) {
        emailFirst = true
    }

    if(email.length === 0) {
        emailError.textContent = "Input can't be blank"
        result = false
        formBox.emailB.style.outline = "2px solid red"
    }
    else if(email.length < 5 || email.length > 50) {
        emailError.textContent = "Min 5 char and max 50 char"
        result = false
        formBox.emailB.style.outline = "2px solid red"       
    } 
    else if(!email.includes("@")) {
        emailError.textContent = "Input must contain @"
        result = false
        formBox.emailB.style.outline = "2px solid red"       
    }
    else if(emailFirst) {
        emailError.textContent = "Input must not start with @, number nor symbol"
        result = false
        formBox.emailB.style.outline = "2px solid red"       
    }
    else if(email.includes(" ")) {
        emailError.textContent = "Input must not contain space"     
        result = false  
        formBox.emailB.style.outline = "2px solid red" 

    }
    else {
        emailError.textContent = ""
        result = true
        formBox.emailB.style.outline = "1px solid rgba(166, 166, 252, 0.293)"
    }


    let passFirst = false

    if(pass.length > 0 && !letter.includes(pass[0])) {
        passFirst = true
    }

    let passNum = false
    let passSymbol = false

    for(let i of pass) {
        if(nums.includes(i)) {
            passNum = true
        }
        else if(symbol.includes(i)) {
            passSymbol = true
        }
    }

    if(pass.length === 0) {
        passError.textContent = "Input can't be blank"
        result = false
        formBox.passB.style.outline = "2px solid red"
    }
    else if(pass.length < 8 || pass.length > 64) {
        passError.textContent = "Min 8 char and max 64 char"
        result = false
        formBox.passB.style.outline = "2px solid red" 
    }
    else if(pass.includes(" ")) {
        passError.textContent = "Input must not contain space"
        result = false
        formBox.passB.style.outline = "2px solid red"        
    }
    else if(passFirst) {
        passError.textContent = "Input must start with a letter"
        result = false
        formBox.passB.style.outline = "2px solid red"        
    }
    else if(!passNum) {
        passError.textContent = "Input must contain at least one number(1234567890)"
        result = false
        formBox.passB.style.outline = "2px solid red"       
    }
    else if(!passSymbol) {
        passError.textContent = "Input must contain at least one of these symbols: !@#$_-&"
        result = false
        formBox.passB.style.outline = "2px solid red"
    }
    else {
        passError.textContent = ""
        result = true
        formBox.passB.style.outline = "1px solid rgba(166, 166, 252, 0.293)"        
    }


    if(cnfPass.length === 0) {
        cnfPassError.textContent = "Input can't be blank"
        result = false
        formBox.cnfPassB.style.outline = "2px solid red"
    }
    else if(cnfPass !== pass) {
        cnfPassError.textContent = "Passwords don't match"
        result = false
        formBox.cnfPassB.style.outline = "2px solid red"       
    }
    else {
        cnfPassError.textContent = ""
        result = true
        formBox.cnfPassB.style.outline = "1px solid rgba(166, 166, 252, 0.293)"        
    }


    if(result) {
        alert("You have successfuly registered!")
        form.reset()
        formBox.nameB.style.outline = "1px solid rgba(166, 166, 252, 0.293)"
        formBox.emailB.style.outline = "1px solid rgba(166, 166, 252, 0.293)"
        formBox.passB.style.outline = "1px solid rgba(166, 166, 252, 0.293)"
        formBox.cnfPassB.style.outline = "1px solid rgba(166, 166, 252, 0.293)"
    }
})
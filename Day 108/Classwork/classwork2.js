// 2. შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად ტექსტი, სადაც იქნება რიცხვები, ასოები და სხვა სიმბოლოები. თქვენი მიზანია დაითვალოთ თითოეული მათგანი რამდენჯერ გვხვდება და შემდეგ გადაამრავლოთ ერთმანეთზე. (თუ რომელიმე ერთ-ერთის მნიშვნელობა 0 იქნება მაშინ ამ რიცხვზე არ გადაამრავლოთ)

function count(text) {
    let letter = 0
    let number = 0
    let other = 0
    let multiply = 1

    for(let i of text) {
        if("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".includes(i)) {
            letter++
        }
        else if("1234567890".includes(i)) {
            number++
        }
        else {
            other++
        }
    }
    if(letter !== 0 && number !== 0 && other !== 0) {
        multiply = letter * number * other
    }
    else if(letter === 0 && number !== 0 && other !== 0) {
        multiply = number * other
    }
    else if(letter !== 0 && number === 0 && other !== 0) {
        multiply = letter * other
    }
    else if(letter !== 0 && number !== 0 && other === 0) {
        multiply = letter * number
    }
    else if(letter !== 0 && number === 0 && other === 0) {
        multiply = letter
    }
    else if(letter === 0 && number !== 0 && other === 0) {
        multiply = number
    }
    else if(letter === 0 && number === 0 && other !== 0) {
        multiply = other
    }
    else {
        multiply = 0
    }

    return multiply
}

console.log(count("12345tyhnmo09iuyhgfcdsewazxcvbhjkl.;p/'[-[/*bhygvtfcdexsw2qa!@#$%^&*()"))
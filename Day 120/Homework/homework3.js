// 3. შექმენით ცვლადი სადაც შეინახავთ ან true -ს ან false-ს. თუ ცვლადის მნიშვნელობა იქნება true მაშინ საიტზე გამოაჩინეთ თქვენი სახელი, გვარი და რამე სურათი. სხვა შემთხვევაში მხოლოდ ტექსტად სახელი გვარი და სხვა სურათი. (ანუ true-ს შემთხვევაში გამიჩნდეს თქვენი ინფორმაცია და false შემთხვევაში რა ი ფორმაცია უნდა გამიჩნდეს)

let bool = true
let parag = document.getElementsByTagName("div")[0]

if (bool === true) {
    parag.innerHTML = `
        Aleqsandre Egutia
        <img src="homework3.png" alt="">
    `
} 
else {
    parag.innerHTML = `
        Aleqsandre Egutia
    `
}
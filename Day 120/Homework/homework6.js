// 6. მომხმარებელს შემოატანინეთ პაროლი. თუ პაროლი სწორი იქნება მაშინ გამოაჩინეთ საიტზე თქვენი სახელი გვარი. სხვა შემთხვევაში “პაროლი არასწორია” (prompt)

let pass = "12345"
let user = prompt("Enter your password:")

let divBox = document.querySelector("div")

if(pass === user) {
    divBox.innerHTML = "<p>Aleqsandre Egutia</p>"
}
else {
    divBox.innerHTML = "<p>პაროლი არასწორია</p>"
}
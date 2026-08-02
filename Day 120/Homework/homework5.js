/*
5. საიტზე დაამატეთ დივი. შემდეგ სკრიპტში შექმენით ცვლადი. ამ ცვლადის მნიშვნელობა თუ იქნება თქვენი სახელი მაშინ ეს დივი გასტილეთ და შიგნით h1 დაამატეთ სადაც ეწერება თქვენი სახელი. სხვა შემთხვევაში სხვა სტილები გადაეცით და ეწეროს მხოლოდ გამარჯობა. (setAttributes და getAttributes გამოიყენეთ.
მინიშნება: css ფაილი დაგჭირდებათ)
*/

let smth = "Aleqsandre"
let div = document.getElementById("div1")

if(smth === "Aleqsandre") {
    div.setAttribute("class", "matched")
    div.innerHTML = `<h1>Aleqsandre</h1>`
} 
else {
    div.setAttribute("class", "not_matched")
    div.innerHTML = "გამარჯობა"
}
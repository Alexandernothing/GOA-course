/*
    2)შექმენით სარეგისტრაციო ფორმა სადაც იქნება ემაილის სახელის და აპროლის შესაყვანი ველები

    შენი დავალებაა რომ ასევე შექმნა ფორმის გარეთ h1 h2 და h3

    oninput ივენთზე როცა მომხმარებელი სახელის გრაფაში დაიწყებს ჩაწერას შეიცვალოს ჰ1 ის მნიშვნელობა იმით თ რაც შეიყვანა მომხმარებელმა სახელის გრაფაში

    onchange ზე როცა მომხ შეავსებს იმეილს შეიცვალოს h2 და შიგ ჩაიწეროს ის მნშვნელობა რაც მომხმარებელმა ჩაწერა იმეილის გრაფაში/იგივე გაიმეორე პაროლისშემთხვევაში და შეცვალე h3 
*/

let inp1 = document.getElementById("i1")
let inp2 = document.getElementById("i2")
let inp3 = document.getElementById("i3")
let header1 = document.querySelector("h1")
let header2 = document.querySelector("h2")
let header3 = document.querySelector("h3")

inp1.oninput = () => {
    header1.textContent = inp1.value
}

inp2.onchange = () => {
    header2.textContent = inp2.value
}

inp3.onchange = () => {
    header3.textContent = inp3.value
}
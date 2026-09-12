/*
    2)შექმენი <div> და მასში გამოიტანე დღევანდელი თარიღი ასეთი ფორმით:

    Sunday, September 6, 2026

    პირობა: getDay() და getMonth() აბრუნებენ რიცხვებს, ამიტომ შექმენი შესაბამისი მასივები:

    let days = ["Sunday", "Monday", ...];

    let months = ["January", "February", ...];

    და მიღებული რიცხვების მიხედვით გამოიტანე სწორი სახელები.
*/

let txt = document.querySelector("h1")
let date = new Date()
let weekDay = date.getDay()
let month = date.getMonth()
let day = date.getDate()
let year = date.getFullYear()

let days = ["Sunday", "Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

txt.textContent = `${days[weekDay]}, ${months[month]} ${day}, ${year}`
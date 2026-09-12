/*
    3)შექმენი ღილაკი:

    Check Today

    დაჭერისას DOM-ში გამოიტანე:

    Today is Monday
    It's a working day.

    ან:

    Today is Sunday
    It's a weekend.

    პირობა:

    გამოიყენე new Date()
    getDay()
    DOM
    if/else
*/

let button = document.querySelector("button")
let para1 = document.querySelector(".p1")
let para2 = document.querySelector(".p2")

button.addEventListener("click", () => {
    let date = new Date()
    let weekDay = date.getDay()
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    para1.textContent = `Today is ${weekDays[weekDay]}`

    if (weekDay === 0 || weekDay === 6) {
        para2.textContent = "It's a weekend"
    }
    else {
        para2.textContent = "It's a working day"
    }
})
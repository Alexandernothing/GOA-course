/*
9)ღილაკზე დაჭერისას გენერირდეს შემთხვევითი რიცხვი 1-100.

თუ გამოვიდა:

100 → 🎉 JACKPOT
სხვა შემთხვევაში უბრალოდ დაიბეჭდოს რიცხვი.

ბონუსი: ondblclick-ზე ისტორია გასუფთავდეს.(reset)
*/

let randomNum = document.querySelector("h1")

function randomNumber() {
    let num = Math.floor(Math.random() * 100) + 1

    if(num === 100) {
        randomNum.textContent = "🎉 JACKPOT"
    } 
    else {
        randomNum.textContent = num
    }
}

function reset() {
    randomNum.textContent = "number"
}
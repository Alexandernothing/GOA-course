/*
3)დავალება:
გვერდზე წერია:

Secret Locked

მხოლოდ ორმაგი დაჭერისას (ondblclick) შეიცვალოს:

Secret Unlocked ✅
*/

let txt = document.querySelector("h1") 

function unlock() {
    txt.textContent = "Secret Unlocked ✅"
}
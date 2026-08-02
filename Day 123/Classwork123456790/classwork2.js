/*
2. გვერდზე იყოს ტექსტი:

🔒 Locked - წითელი ფერისიყოს სიტყვა Locked

დავალება:

ორმაგი დაკლიკების (ondblclick) შემდეგ ტექსტი შეიცვალოს:

🔓 Unlocked -ტექსტის ფერიც გახდეს მწვანე.
*/

let para = document.getElementById("p1")

function double() {
    para.textContent = "🔓 Unlocked"
    para.style.color = "green"
}
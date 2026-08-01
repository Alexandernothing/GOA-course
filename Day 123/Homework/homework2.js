/*
 2)დავალება:
შექმენი ღილაკი "❤️ Like". ყოველ დაჭერაზე:

რიცხვი გაიზარდოს 1-ით.

როდესაც ლაიქები 10-ს გადააჭარბებს, გამოჩნდეს ტექსტი:

"Popular Post!"

ბონუსი: 50 ლაიქზე ტექსტი გახდეს ოქროსფერი.
*/

let para = document.querySelector("p")
let butt = document.querySelector("button")

let count = 0

function add() {
    count++
    butt.textContent = `${count} ❤️ Like`
    if(count >= 50) {
        para.style.color = "gold"
    }
    else if(count > 10) {
        para.style.display = "block"
    }

}
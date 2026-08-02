/*
1) შექმენი ბარათი, რომელზეც თავიდან წერია:

"გადამატარე მაუსი"

დავალება:

onmouseover-ზე:
ტექსტი შეიცვალოს "🎉 საიდუმლო გაიხსნა!"-ით.
ფონი გახდეს მწვანე.
ტექსტის ფერი გახდეს თეთრი.
ზომა გაიზარდოს (transform: scale(1.1)).
*/

let box = document.querySelector("div")
let para = document.querySelector("p")

function secret() {
    para.textContent = "🎉 საიდუმლო გაიხსნა!"
    box.style.backgroundColor = "green"
    para.style.color = "white"
    box.classList.toggle("parent")
}

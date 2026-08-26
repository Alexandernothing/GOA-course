/*
    1)ფორმა რომელსაც ექნება ერთ შესაყვანი ველი , შენი დავალებაა addEventListener ის დახმარებით oninput ზე ანუ რასაც მომხმარებელი შეიყვანს შესაყვან ველში ეგ ტექსტი იცვლებოდეს და ხდებოდეს რაიმე პარაგრაფის ტექსტკონტენტი    
*/

let para = document.querySelector("p")
let inp1 = document.getElementById("i1")

inp1.addEventListener("input", () => {
    para.textContent = inp1.value
})
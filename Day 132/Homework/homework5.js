/*
    5)შექმენი პროდუქტების დასამატებელი აპლიკაცია.
    HTML-ში უნდა იყოს:
    - პროდუქტის სახელის input;
    - პროდუქტის ფასის input;
    - Add Product ღილაკი;
    - div, რომელშიც პროდუქტები გამოჩნდება.
    JavaScript-ში შექმენი ცარიელი მასივი:
    let products = [];


    მოთხოვნები:
    1. მომხმარებელმა უნდა შეიყვანოს პროდუქტის სახელი და ფასი.
    2. ღილაკზე დაჭერისას შექმენი ობიექტი, რომელსაც ექნება name და price თვისებები.
    3. დაამატე ეს ობიექტი products მასივში.
    4. თითოეული პროდუქტი დაარენდერე ცალკე div ბარათში.
    5. ბარათში გამოიტანე პროდუქტის სახელი და ფასი.
    6. ყოველი ახალი პროდუქტის დამატების შემდეგ ყველა პროდუქტი უნდა ჩანდეს.
    7. დამატების შემდეგ ორივე input გაასუფთავე.
    მაგალითად, მომხმარებელი დაამატებს:
    - Laptop — 1500 GEL
    - Phone — 800 GEL
    - Mouse — 50 GEL
    სამივე პროდუქტი ცალკე ბარათში უნდა გამოჩნდეს.


    თუ ვერ მიხვდით მოიძიეთ მეხუთე დავალებაზე უმარტივესია
*/

let products = []

let inp1 = document.getElementById("name")
let inp2 = document.getElementById("price")
let btn = document.querySelector("button")
let box = document.querySelector("div")

btn.addEventListener("click", () => {
    let name = inp1.value
    let price = inp2.value

    let newProduct = {
        name: name,
        price: price
    }

    products.push(newProduct)

    box.innerHTML = ''
    products.forEach(i => {
        let card = document.createElement('div')
        card.textContent = `${i.name} — ${i.price} $`
        box.appendChild(card)
    })

    inp1.value = ''
    inp2.value = ''
})
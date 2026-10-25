/*
    1)შექმენით ორი ინფუთი ერთი პროდუქტის სახელისთვის მეორე ფასისთვის

    ასევე ღილაკიც

    ღილაკზე დაჭერისას ცარიელ სიაში დაემატოს პროდუქტის ფასი და სახელი ოღონდ ობიექტის სახით , ანუ სიაში უნდა ჩაემატოს ობიექტები დაჭერის შედეგად სადაც იქნება ფასი და სახელი

    თქვენი დავლებაა ღილაკზე დაჭერის შედეგად ყველა პროდუქტი დარენდერდეს ეკრანზე


    ასევე დაამატეთ ორი ღილაკი --> +500 products და -500 products

    როდესაც დააჭერთ +500 product ღილაკს საიტზე დარენდერდეს ისეთი პროდუქტები რომლის ფასი მეტია 500ზე , და როდესაც დააჭერთ -500 product საიტზე დარენდერდეს ისეთი პროდუქტები რომლის ფასი ნაკლებია 500 ზე
*/

let form = document.querySelector("form")
let btn = document.getElementById("sub")
let div = document.querySelector("div")
let btnPlus = document.getElementById("plus")
let btnMinus = document.getElementById("minus")

let list = []

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let listObj = {
        name: event.target.name.value,
        price: Number(event.target.price.value)
    }

    div.innerHTML = ""

    list.push(listObj)

    list.forEach(i => {
        let { name, price } = i
        div.innerHTML += `
            <h1>${name}</h1>
            <h1>${price}</h1>
        `
    })

    form.reset()
})

btnPlus.addEventListener("click", () => {
    let filtered = list.filter(item => item.price > 500)

    div.innerHTML = ""
    
    filtered.forEach(i => {
        let { name, price } = i
        div.innerHTML += `
            <h1>${name}</h1>
            <h1>${price}</h1>
        `
    })
})

btnMinus.addEventListener("click", () => {
    let filtered = list.filter(item => item.price < 500)

    div.innerHTML = ""
    
    filtered.forEach(i => {
        let { name, price } = i
        div.innerHTML += `
            <h1>${name}</h1>
            <h1>${price}</h1>
        `
    })
})
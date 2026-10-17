/*
    1)let names = [];


    მოთხოვნები:
    1. ღილაკზე დაჭერისას მასივში დაამატე სახელი "Goga".
    2. მასივის თითოეული სახელი გამოიტანე ცალკე li ელემენტში.
    3. ყოველი დაჭერისას ახალი სახელი დაემატოს სიას.
    4. გვერდზე გამოჩნდეს ყველა დამატებული სახელი.
    მაგალითად, ღილაკზე სამჯერ დაჭერის შემდეგ:
    - Goga
    - Goga
    - Goga
    გამოიყენე: addEventListener(), push(), createElement(), textContent, append()
*/

let names = []
let butn = document.querySelector("button")
let list = document.querySelector("ul")

butn.addEventListener("click", () => {
    names.push("Goga")
    
    let li = document.createElement("li")

    names.forEach(i => { 
        li.textContent = i
        list.append(li)
    })
})
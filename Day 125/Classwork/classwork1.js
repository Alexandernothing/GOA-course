/*
    1) onkeydown-ზე:
    გამოიტანე <p>-ში რომელი ღილაკი დააჭირა მომხმარებელმა.
    მაგალითად: „დაჭერილია: a“
    თუ ღილაკი არის Enter, გამოიტანე „Enter დააჭირე!“
    თუ Space-ია, გამოიტანე „Space დააჭირე!“ ... 


    onkeyup-ზე:
    ტექსტი შეიცვალოს:
    „ღილაკს ხელი აუშვი: a“
    თუ Enter იყო → „Enter გათავისუფლდა!“ ... 
*/

let body = document.body
let para = document.createElement("p")

document.onkeydown = function(event) {
    if(event.key !== "Enter" && event.key !== "Space") {
        para.textContent = `დაჭერილია: ${event.key}`
    }
    else if(event.key === "Enter") {
        para.textContent = `Enter დააჭირე!`
    }
    else if(event.key === "Space") {
        para.textContent = `Space დააჭირე!`
    }
    body.appendChild(para)
}

document.onkeyup = function(event) {
    if(event.key !== "Enter") {
        para.textContent = `ღილაკს ხელი აუშვი: a`
    }
    else {
        para.textContent = `Enter გათავისუფლდა!`
    }
    para.appendChild(para)
}
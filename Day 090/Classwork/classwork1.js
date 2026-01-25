// მომხმარებელს შემოატანინეთ გრძელი ტექსტი და ასო ა სადაც იქნება შეცვალოს @-თი (დრო: 5წთ)

let text = prompt("Enter a text: ")
let b = ""

for(let i = 0;i <= text.length - 1;i++) {
    if(text[i] === "a") {
        b += "@"
    }
    else{
        b += text[i]
    }
}

console.log(b)
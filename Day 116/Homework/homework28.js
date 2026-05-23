// 28. მომხმარებელს შემოატანინეთ ტექსტი და გაიგეთ ეს ტექსტი თუ შეიცავს ხმოვნებს.

let userTxt = prompt("Enter any text:")
let vowels = "aeiouAEIOU"
let hasVowel = false

let i = 0
while(i < userTxt.length) {
    if(vowels.includes(userTxt[i])) {
        hasVowel = true
    }
    i++
}

console.log(hasVowel)
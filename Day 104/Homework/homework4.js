// 4. შექმენით ფუნქცია, რომელიც რენდომულად აარჩევს რიცხვს 1-დან 10-მდე. და მომხმარებელმა უნდა გამოიცნოს ეს რიცხვი. ამისთვის მას უნდა ჰქონდეს 3 ცდა.

function random() {
  let num = Math.floor(Math.random() * 10) + 1
  let attempts = 3

  for (let i = 0; i < 3; i++) {
    let user = Number(prompt("Guess the number 1-10:"))

    if (user === num) {
      alert("You guessed it")
      return
    } 
    else {
      attempts--
    }
  }
}

random()
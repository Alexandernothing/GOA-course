// 2. შექმენით ობიექტი სადაც შეინახავთ რომელიმე ფილმის სახელს, გამოშვების წელს და შეფასებას. შემდეგ ობიექტის გარეთ მომხმარებელს შეეკითხეთ თუ უნდა რომ ფილმი შეაფასოს, თუ უნდა რომ შეაფასოს მაშინ გაანახლეთ მისი მნიშვნელობა. თუ არ უნდა განახლება ობიექტის შიგნით არსებული მეთოდი გამოიძახეთ რომელიც დააბრუნებს ტექტს "თქვენ არ შეგიფასებიათ ფილმი"

let object = {
    name: "Breaking Bed",
    releaseYear: 2008,
    rating: 9.5
}

let user = prompt("Do you want to rate this film(Yes, or No)?").toLowerCase()
if(user === "yes") {
    let userRating = Number(prompt("Can you rate this film 1-10?"))
    if(userRating > 10 || userRating < 1) {
        userRating = Number(prompt("Can you rate this film 1-10?"))
    }
    else{
        object.rating = userRating
    }
}

console.log(object)
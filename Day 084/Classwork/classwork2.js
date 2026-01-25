// 2) შექმენი ცვლადი საცად შეინახავთ ცხოველის სახელს, შემდეგ მომხმარებელს შემოატანინეთ ცხოველის სახელი, თუ მომხმარებლის შემოტანილი ცხოველი არის ცვლადში შენახული ცხვოველი ან მისი შემოყვანილი ცხოველი არის 'lomi' დაუკონსოლლოგეთ --> "you entered my favourite animal or king of animals "სხვა შემთხვევაში გამოიტანე --> "You entered the animal i hate"

let animal1 = "dog"
let animal2 = prompt("Enter any animals name: ").toLowerCase()

if(animal1 == animal2 || animal2 == "lion") {
    console.log("you entered my favourite animal or king of animals")
}
else{
    console.log("You entered the animal i hate")
}
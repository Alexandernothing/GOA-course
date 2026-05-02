/*
2)შექმენით ფუნქცია სახელად createPerson() რომელმაც უნდა შექმნას ობიექტები რომლებსაც ექნებათ -->

name , surname , age , eyeColor , adress 

ფუნქციამ უნდა დააბრუნოსმ ობიექტი ზემოთ მოცემული მნიშვნელობებით

შექმენი 5 ცვლადი და 5 ივე ცვლადში შეინახე ობიექტები გაჯსხვავებული მნიშვნელობებით

დააკონსოლლოგე ყველა მათგანი რომ ნახო შედეგი
*/

function createPerson(name, surname, age, eyeColor, adress) {
    return {name: name, surname: surname, age: age, eyeColor: eyeColor, adress: adress} 
}

let first = createPerson("Aleqs", "Egutia", 13, "brown", "Georgia")
let second = createPerson("John", "Brow", 36, "blue", "England")
let third = createPerson("Marta", "Esquelo", 23, "brownis", "Mexico")
let fourth = createPerson("Donald", "Trump", 60, "green", "USA")
let fifth = createPerson("Aleqsandre", "Lukashenko", 65, "pink", "Belarus")

console.log(first)
console.log(second)
console.log(third)
console.log(fourth)
console.log(fifth)
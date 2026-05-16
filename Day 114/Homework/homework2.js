// 2. შექმენი 5 ცვლადი, სადაც განსხვავებული მონაცემები შეინახება. ჯერ შექმენი ობიექტი shorthand-ით, შემდეგ კი სხვა ხაზზე გამოიყენე დესტრუქცია, რომ ამოიღო მხოლოდ სახელის და მეილის მნიშვნელობა.

let name = "Aleqs"
let email = "aleqs@email.com"
let age = 14
let country = "Georgia"
let user = {name, email, age, country}
let {name: userName, email: userEmail} = user

console.log(userName)
console.log(userEmail)
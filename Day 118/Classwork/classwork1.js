// 1. შექმენით factory function სადაც შეინახავთ მომხმარებლის სახელს, გვარს, მეილს, id-ს, ასაკს, და private property (_balance) სადაც საწყისაც შეინახავთ 100. get-მა დააბრუნოს {_balance}$ (უბრალოდ $ დაუმატოს). set-მა გაანახლოს ეს ბალანსი იმ შემთხვევაში თუ გადაცემული მნიშვნელობა იქნება Number ტიპის მონაცემი და დადებითი რიცხვი.

function func(name, surname, email, id, age) {
    let _balance = 100
    return {
        name,
        surname,
        email,
        id,
        age,
        get balance() {
            return `${_balance}$`
        },
        set balance(i) {
            if(typeof i === "number" && i > 0) {
                _balance = i
            }
        }
    }
}


let person1 = func("Aleqsandre", "Egutia", "aleqsi@gmail", 1, 14)
let person2 = func("Dato", "Khubua", "dato@gmail", 2, 15)
person2.balance = 101


console.log(person1.balance)
console.log(person2.balance)
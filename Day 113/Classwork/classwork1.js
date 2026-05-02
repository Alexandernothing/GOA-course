/*
1) შექმენი ობიექტი სადაც იქნება _number  , სადაც შეინახავ სტრინგ ტელეფონის ნომერს

შენი დავალებაა შექმნა set tel ,რომელმაც უნდა შეცვალოს ტელეფონის ნომერი შემდგნაირად-->

უნდა იყოს 6 ზე მეტი სიმბოლო და ეს სტრინგი უნდა შეიცავდეს მხოლოდ ციფრებს

თუ პირობა დაკმაყოფილდა შეცვალე ნომერი თუ არა და გამოიტანე ALERT!!


შემდეგ შექმენი GET რომელიც დააბრუნებს შეცვლილ მნშვნელობას შემდეგნაირად -->

თუ სიგრძე არის 6 ზე მეტი დააბრუნე ნომერი,სხვა შემთხვევაშ დააბრუნე CANT RETURN NUMBER
*/

let obj = {
    _number: "595 56 57 58",
    set tel(num) {
        let bool = true
        for(let i of num) {
            if(i < "0" || i > "9") {
                bool = false
            }
        }
        if(num.length > 6 && bool) {
            this._number = num
        } 
        else {
            alert("ALERT!!")
        }
    },
    get tel() {
        if(this._number.length > 6) {
            return this._number
        }
        else {
            return "CANT RETURN NUMBER"
        }
    }
}

console.log(obj.tel = "123")
console.log(obj.tel)
// 3. შექმენი ობიექტი bankAccount, სადაც _balance იქნება private.  შექმენი getter, რომელიც დააბრუნებს ბალანსს ფორმატირებულად (მაგ: "$123") და setter, რომელიც დაუშვებს ბალანსის შეცვლას მხოლოდ იმ შემთხვევაში, თუ ახალი მნიშვნელობა დადებითი რიცხვია.

const bankAccount = {
    _balance: 0,
    get balance() {
        return "$" + this._balance
    },
    set balance(newValue) {
        if(newValue > 0) {
            this._balance = newValue
        } 
        else {
            console.log("Invalid input")
        }
    }
}

bankAccount.balance = 3
console.log(bankAccount.balance) 
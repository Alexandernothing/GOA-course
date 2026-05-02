/*
2)შექმენი bankAccount:

_balance

მეთოდები:

deposit(amount)
withdraw(amount)

წესები:

amount > 0 ანუ შესატანი თანხა(0 ლარს ვერ შევიტანთ)
withdraw არ უნდა აღემატებოდეს ბალანსს(თუ ბალანსზე 100 ლარი გვაქ 200 ვერ გამოვიტანთ D)

შექმენი getter:
რომელიც აბრუნებს 
balance ს
*/

let bankAccount = {
    _balance: prompt("Enter your bank balance:"),
    deposit: function(amount) {
        if(amount > 0) {
            this._balance += amount
            return `You have deposited ${amount}`
        }
        else {
            return "Deposit done unsuccessfuly"
        }
    },
    withdraw: function(amount) {
        if(amount < this._balance ) {
            this._balance = this._balance - amount
            return `You have withdrawed ${amount}`
        }
        else {
            return "Withdraw done unsuccessfuly"
        }
    },
    get total() {
        return this._balance
    }
}
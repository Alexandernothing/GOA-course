// 5. შექმენით ობიექტი სადაც გექნებათ private property და ეს იქნება ბალანსი. რომლის მნიშვნელობაც იქნება თავიდან 100-ის ტოლი. get-მა დააბრუნოს ბალანსის 80%. set-ში კი დაწერეთ პირობა სადაც შეამოწმებთ რომ ბალანსზე მომხმარებელმა აუცილებლად 50-ზე მეტი მთელი რიცხვი უნდა შემოიტანოს.

let obj = {
    _balance: 100,
    get balance() {
        return this._balance * 80 / 100
    },
    set balance(i) {
        let num = Number(prompt("Enter your balance:"))

        if(num > 50) {
            this._balance = num
            console.log("Operation sucessful")
        }
        else {
            return "Make sure your balance is above 50"
        }
    }
}

obj.balance = 52
console.log(obj.balance)
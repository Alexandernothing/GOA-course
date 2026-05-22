// 4. შექმენი ობიექტი სახელად user. Setter-ის გამოყენებით გააკეთეთ ისე, რომ მომხმარებლის სახელი (username) იყოს მინიმუმ 5 სიმბოლო, სხვა შემთხვევაში დააბრუნოს შეცდომა.

let user = {
    _username: "",
    set username(newValue) {
        if(newValue.length >= 5) {
            this._username = newValue
        }
        else {
            console.log("Invalid input")
        }
    },
    get username() {
        return this._username
    }
}

user.username = "Aleqsi"
console.log(user.username)

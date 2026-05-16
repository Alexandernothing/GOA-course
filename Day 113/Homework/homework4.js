/*
4)გაქვს profile

property:

_username
გააკეთე:

setter username(value)
არ უნდა შეიცავდეს space-ს
უნდა იყოს მინიმუმ 3 ციფრი ამ სტრინგში
შეინახე lowercase-ში
getter username()
დააბრუნე "@" + username
getter length()
აბრუნებს username-ის სიგრძეს
*/

let profile = {
    _username: "",
    set username(value) {
        let count = 0
        for(let i of value) {
            if(Number(i) < i + 1) {
                count++
            }
        }
        if(!value.includes(" ") && count >= 3) {
            this._username = value.toLowerCase()
        }
        else {
            console.log("Invalid")
        }
    },
    get username() {
        return `@${this._username}`
    },
    get length() {
        return this._username.length
    }
}

profile.username = "123abcd!@"
console.log(profile.username)
console.log(profile.length)
/*
3)გაქვს profile

მოთხოვნები:

_username private
setter:
ყველა ასო უნდა იყოს პატარა (lowercase)
getter:
აბრუნებს "@" + username
*/

let profile = {
    _username: "",
    set username(user) {
        let upper = "QWERTYUIOPLKJHGFDSAZXCVBNM"
        if(user.toLocaleLowerCase() === user) {
            this._username = user
        }
        else {
            console.log("All letter must be lower case")
        }
    },
    get username() {
        return `@${this._username}`
    }
}

profile.username = "aaa"
console.log(profile.username)
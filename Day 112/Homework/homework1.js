/*
1)შექმენი user ობიექტი:

_password
username

მოთხოვნები:

შექმენი getter password → ყოველთვის აბრუნებს "******" (რეალური პაროლი არ უნდა ჩანდეს)
შექმენი მეთოდი changePassword(oldPass, newPass)

წესები:

თუ oldPass არ ემთხვევა → არ შეცვალოს
newPass უნდა იყოს მინიმუმ 6 სიმბოლო
*/

let user = {
    _password: prompt("Enter your pass:"),
    username: prompt("Enter your user:"),
    get password() {
        return "******"
    },
    changePassword: function(oldPass, newPass) {
        if(oldPass !== this._password) {
            return "You can't change"
        }
        else {
            if(newPass.length < 6) {
                return "The length of the new password must at least be 6"
            }
            else {
                return "Password changed"
            }
        }
    }
}
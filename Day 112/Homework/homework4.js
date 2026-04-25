/*
4)შექმენი user:
სადაც იქნება : 
_email

setter:
უნდა შეცვალოს ემაილი(_email)

წესები:

ახალი ემაილი უნდა შეიცავდეს "@" და "." ერთად

getter:

აბრუნებს _email ს
*/

let user = {
    _email: "",
    set email(newEmail) {
        if(newEmail.includes("@") && newEmail.includes(".")) {
            this._email = newEmail
        } 
        else {
            console.log("Invalid email")
        }
    },
    get email() {
        return this._email;
    }
}
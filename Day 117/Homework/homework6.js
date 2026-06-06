//6. შექმენით ობიექტი სადაც გექნებათ private property და ეს იქნება სიჩქარე. რომლის მნიშვნელობაც იქნება თავიდან 10-ის ტოლი. თუ სიჩქარე 100-ზე მეტია, get-მა დააბრუნოს ტექსტი "Super Speed: [სიჩქარე]", სხვა შემთხვევაში უბრალოდ სიჩქარის რიცხვი. set-ში კი დაწერეთ პირობა, სადაც შეამოწმებთ, რომ ახალი შემოყვანილი სიჩქარე აუცილებლად არსებულ სიჩქარეზე მეტი იქნება.

let obj = {
    _speed: 10,
    get speed() {
        if(this._speed > 100) {
            return `Super Speed: [${this._speed}]`
        }
        else {
            return this._speed
        }
    },
    set speed(i) {
        if(i > this._speed) {
            this._speed = i 
            console.log("Speed updated successfully") 
        } 
        else {
            console.log("New speed must be higher than current speed")
        }
    }
}

obj.speed = 120        
console.log(obj.speed) 
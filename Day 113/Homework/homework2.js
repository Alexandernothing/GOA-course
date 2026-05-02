/*
2)გაქვს weather(მოიძიე როგორ გადავიყვანოთ F to C )

მოთხოვნები:

_celsius private

setter ცელსიუსზე

getter fahrenheit
დააბრუნოს გადაყვანილი მნიშვნელობა
*/

let weather = {
    _celsius: 0,
    set celsius(c) {
        this._celsius = c
    },
    get fahrenheit() {
        return this._celsius * 1.8 + 32
    }
}

weather.celsius = 0
console.log(weather.fahrenheit)
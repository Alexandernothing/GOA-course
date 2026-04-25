/* 1)შექმენით ობიექტი სადაც იქნება სამი private კუთვნილება, model , brand და year

შენი დავალებაა რომ შექმნა გეთერ მეთოდი სახელად displayCar() რომელიც-->

შეამოწმებს თუ მანქანის წელი არის 2000 ზე მეტი და ბრენდი არის "Mersedes" მაშინ დააფრუნე სრული ინფორმაცია მანქანის შესახებ

სხვა შემთხვევაში დააბრუნე რომ --> "we are not interested, this {model} is not for us"

გამოიძახხეთ მეთოდი რომ ნახოთ შედეგი
*/

let car = {
    _model: "E-class",
    _brand: "Mersedes",
    _year: 2009,

    get displayCar() {
        if(this._year > 2000 && this._brand === "Mersedes") {
            return `This car is ${this._brand} ${this._model} released in ${this._year}`
        } 
        else {
            return `we are not interested, this ${this._model} is not for us`
        }
    }
}

console.log(car.displayCar)
// დაწერე Factory Function, რომელიც აბრუნებს მოტოციკლეტის/მანქანის ინფორმაციებს. გამოიყენე Property Value Shorthand კოდის შესამცირებლად.

function car(brand, model, year, color) {
    return {
        brand,
        model,
        year,
        color
    }
}

let car1 = car("BMW", "M5", 2022, "Black")
let car2 = car("Mercedes", "CLS", 2020, "red")

console.log(car1)
console.log(car2)
// 1. დაწერე ფუნქცია createCar(brand, model, year), რომელიც დააბრუნებს ობიექტს. გამოიყენე shorthand სინტაქსი პარამეტრების მისანიჭებლად.

function createCar(brand, model, year) {
  return {brand, model, year}
}

let car = createCar("Toyota", "Camry", 2022)
console.log(car)
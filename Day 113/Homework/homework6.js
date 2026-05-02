/*
6)დაწერე ფუნქცია createCar(brand, year)

დააბრუნოს ობიექტი:

brand
year


შექმენი რამდენიმე ობიექტი თან შეიანხე ცვლადებში და დააკონსოლლოგე
*/

function createCar(brand, year) {
    return {brand: brand, year: year}
}

let car1 = createCar("Toyota", 2014)
let car2 = createCar("BMW", 2021)
let car3 = createCar("Honda", 2018)

console.log(car1)
console.log(car2)
console.log(car3)
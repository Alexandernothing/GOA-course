/*
7)შექმენი ფუნქცია ავტომობილზე,ქონდეს model,brand,year,color და მოიფიქრე სხვა მნიშვნელობები შენითაც თუ შეძლებ

შექმენი factory function რომელიც შექმნის მანქანის ობიექტებს,შექმენი რამდენიმე ობიექტი და ნახე კონსოლში ყველა მათგანი
*/

function createCar(model, brand, year, color, mileage) {
  return {
    model: model,
    brand: brand,
    year: year,
    color: color,
    mileage: mileage,
  }
}

let car1 = createCar("Corolla", "Toyota", 2015, "red", 93000)
let car2 = createCar("E=class", "Mercedes", 2008, "black", 40000)
let car3 = createCar("B48 ", "BMW", 2017, "white", 60000)
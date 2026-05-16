// 4. მოცემულია ობიექტი:
// const motorcycle = {
//   brand: "Kawasaki",
//   model: "Ninja H2R",
//   specs: {
//     engine: "998cc",
//     horsepower: 310,
//     topSpeed: "400 km/h"
//   },
//   colors: ["Lime Green", "Mirror Coated Spark Black"],
//   isStreetLegal: false
// }
// მოახდინეთ ამ ობიექტის დესტრუქცია მაქსიმალურად. 

let motorcycle = {
  brand: "Kawasaki",
  model: "Ninja H2R",
  specs: {
    engine: "998cc",
    horsepower: 310,
    topSpeed: "400 km/h"
  },
  colors: ["Lime Green", "Mirror Coated Spark Black"],
  isStreetLegal: false
}

let {
  brand,
  model,
  specs: { engine, horsepower, topSpeed },
  colors: [firstColor, secondColor],
  isStreetLegal
} = motorcycle

console.log(brand)
console.log(model)
console.log(engine)
console.log(horsepower)
console.log(topSpeed)
console.log(firstColor)
console.log(secondColor)
console.log(isStreetLegal)
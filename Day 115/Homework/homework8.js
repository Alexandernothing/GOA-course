// 8. შექმენით ფუნქცია სახელად displayCar, რომელიც პარამეტრად მიიღებს ობიექტს. პარამეტრების სიაშივე მოახდინეთ დესტრუქცია ({brand, model, year})

function displayCar({brand, model, year}) {
    console.log(`Brand: ${brand}`)
    console.log(`Model: ${model}`)
    console.log(`Year: ${year}`)

}

let car = {
    brand: "BMW",
    model: "M5",
    year: 2022
}

displayCar(car)
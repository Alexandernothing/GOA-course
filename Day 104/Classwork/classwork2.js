// 2. შექმენით ობიექტი სადაც შეინახავთ მანქანის ინფორმაციას, შიგნით დაამატეთ მეთოდი, რომელიც ობიექტის შიგნით არსებულ ინფორმაციას გაერთიანებს და კონსოლში გამოიტანს.

let car = {
    brand: "BMW 3 Series",
    year: 2015,
    info: function() {
        console.log("The brand is " + this.brand + " and it came out in " + this.year)
    }
}

car.info()
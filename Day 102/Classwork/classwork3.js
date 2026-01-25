/* 3)შექმენით მანქანის ობიექტი, სადაც იქნება სახელი,ბრენდი,წელი და ფერი,~

შენი დავალებაა წვდომა მოიპოვო თითოეულ ობიექტის key ზე და კონსოლში გამოიტანო ისინი ცალ ცალკე

შენი დავალებაა რომ წვდომა მოიპოვო ობიექტის ითოეულ value ზე და კონსოლში გამოიტანო ისინი ცალ ცალკე
*/

let car = {
    name: "BMW",
    brand: "MINI",
    year: 2016,
    color: "black"
}

let keys = Object.keys(car)

for(let i of keys) {
    console.log(i)
}

let values = Object.values(car)

for(let i of values) {
    console.log(i)
}
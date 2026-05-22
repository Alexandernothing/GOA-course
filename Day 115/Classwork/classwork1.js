/* 
1)შექმენი ობიექტი ავტომობილების შესახებ --> brand , model , year , color

შენიდ დავალებაა რომ შებამისი მეთოდის დახმარებით მიიღო სია სადაც იქნბება კიდევ სიები key , value წყვილებით , შენი დავალებაა კონსოლში გამოიტანო key ები ცალკე value ბი ცალკე(გამოიყენე for ან forEach)
*/

let car = {
    brand: "BMW",
    model: "M5",
    year: 2022,
    color: "Black"
}

let entries = Object.entries(car)

entries.forEach(([key, value]) => {
    console.log("Key:", key)
    console.log("Value:", value)
})
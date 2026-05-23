// 13. შექმენით სია სადაც იქნება მინიმუმ 15 ელემენტი სხვადასხვა მონაცემთა ტიპის. გადაუარეთ map-ით და თუ სტრინგია მაშინ lowercase-ად გადააქციეთ. თუ number-ია მაშინ აიყვანეთ კვადრატში იმ შემთხვევაში თუ ფესვი არ აქვს. სხვა შემთხვევაში დააბრუნეთ როგორც არის.

let list = [1, "a", true, 2.2, "B", false, 3, "c", true, 4.4, "D", false, 5, "e", 6.6]
let change = list.map(i => {
    if(typeof(i) === "string") {
        return i.toLowerCase()
    }
    else if(typeof(i) === "number") {
        if (Math.sqrt(i) % 1 === 0) {
            return i
        }
         else {
            return i ** 2
        }
    }
    else {
        return i
    }
})

console.log(change)
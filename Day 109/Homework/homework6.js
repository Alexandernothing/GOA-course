// 6. შექმენით სია სადაც იქნება სტრინგები. დააბრუნეთ თითოეული სტრინგი თავის ინდექსებთან ერთად.

let list = ["door", "washing machine", "basket", "wardrobe", "room", "bath"]

let result = list.map((i, index) => {
    return i + " " + index
})
console.log(result)
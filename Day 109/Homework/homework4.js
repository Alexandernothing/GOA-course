// 4. შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. თუ ელემენტი number ტიპის მონაცემია მაშინ აიყვანეთ კვადრატში. თუ სტრინგია მაშინ შეაბრუნეთ და ისე დააბრუნეთ. სხვა შემთხვევაში როგორც არის ისე დააბრუნეთ.

let list = [1, 2, 3, "abc", "bac", "cab", true, false]
let result = []

list.forEach((i) => {
    if(typeof(i) === "number") {
        result.push(i ** 2)
    }
    else if(typeof(i) === "string") {
        let reversed = ""
        for(let index = i.length - 1;index >= 0;index--) {
            reversed += i[index]
        }
        result.push(reversed)
    }
    else {
        result.push(i)
    }
})
console.log(result)
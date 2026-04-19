// 7. შექმენით სია სადაც იქნება რიცხვები. დააბრუნეთ პირველივე რიცხვი რომელიც არის მარტივი რიცხვი.

let list = [44, 35, 61, 77, 3, 800, 69, 120]
let result = list.find((num) => {
    for(let i = 2;i < num;i++) {
        if(num % i === 0) {
            return false
        }
    }
    return num
})
console.log(result)
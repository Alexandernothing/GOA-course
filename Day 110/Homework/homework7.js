// 7. შექმენით სია სადაც იქნება რიცხვები. დააბრუნეთ პირველივე რიცხვი რომელიც არის მარტივი რიცხვი.

let list = [3, 44, 35, 61, 77, 800, 69, 120]
let result = list.find((num) => {
    for(let i = 2; i < num; i++) {
        if(num % i !== 0) {
            return num
        }
    }
})
console.log(result)
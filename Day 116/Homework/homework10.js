// 10. შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სიიდან დააბრუნებს ყველაზე ხშირად რომელი რიცხვიც მეორდება იმას.

const repeated = arr => {
    let counts = {}
    let count = 0
    let result = ""

    for(let i = 0;i < arr.length;i++) {
        let num = arr[i]
        if(counts[num] !== undefined) {
            counts[num]++
        } 
        else {
            counts[num] = 1
        }
        if(counts[num] > count) {
            count = counts[num]
            result = num
        }
    }
    return result
}

console.log(repeated([1, 2, 2, 3, 3, 3, 4])) 
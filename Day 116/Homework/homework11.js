// 11. შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სიიდან დააბრუნებს ყველაზე პატარა რიცხვს (Math.min-ის გარეშე)

let minimum = arr => {
    let result = ""
    
    for(let i = 0;i < arr.length;i++) {
        for(let ii = 0;ii < arr.length;ii++) {
            if(arr[i] < arr[ii]) {
                result = arr[i]
            }
            else {
                result = arr[ii]
            }
        }
    }
    return result
}

console.log(minimum([2, 3, 4, 5, 6, 1]))
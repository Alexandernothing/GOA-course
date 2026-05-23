// 4. შექმენით ფუნქცია რომელიც დააბრუნებს არგუმენტად გადაცემული რიცხვი მარტივია თუ არა.

function easy(num) {
    if(num < 2) {
        return false
    }
    for(let i = 2;i < num;i++) {
        if(num % i === 0) {
            return false
        }
    }

    return true
}

console.log(easy(3))
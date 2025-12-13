// 1. შექმენით ფუნქცია, რომელიც დაგვიბრუნებს შემოტანილი მნიშვნელობა ლუწია თუ კენტი

function odd_or_even(num) {
    if(num % 2 === 0) {
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}

console.log(odd_or_even(2))
console.log(odd_or_even(9))
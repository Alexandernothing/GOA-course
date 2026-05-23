// 7. შექმენით ფუქნცია რომელსაც გადაეცემა დიდი ტექსტი. და დააბრუნებს რამდენი სიტყვისგან შედგება ეს წინადადება.

let count = function(text) {
    let words = text.split(" ")
    return words.length
}

console.log(count("Hello my name is Aleqsi")) 
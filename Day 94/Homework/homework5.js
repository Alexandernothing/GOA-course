// 5. შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად სახელი. და დააბრუნეთ არის თუ არა თქვენი სახელის ტოლი.

function username(name) {
    return name.toLowerCase() === "aleqsandre"
}
console.log(username("ALEQSANDRE"))
console.log(username("2ed2"))
console.log(username("ALEQSA5yhhjh6NDRE"))
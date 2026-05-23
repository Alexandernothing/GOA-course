// 6. შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია. და დააბრუნეთ ამ რიცხვების საშუალო. (შეკრიბავთ და გაყოფთ რაოდენობაზე)

let list = function(arr) {
    let sum = 0
    for(let i = 0;i < arr.length;i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(list([3, 3, 3]))
// 4. შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი სიმბოლო. switch / case გამოიყენეთ დაადგინეთ ეს სიმბოლო ასოა, რიცხვია თუ სხვა სიმბოლო.

function symbol(a) {
    switch(true) {
        case typeof(a) === "string":
            console.log("Symbol is letter") 
            break
        case typeof(a) === "number":
            console.log("Symbol is number") 
            break
        default:
            console.log("Symbol is smth else") 
            break
    }
}

console.log(symbol("edewvrer"))

// 1. switch / case გამოყენებით შეამოწმეთ რიცხვი თუ არის 18-ის ტოლი ან მეტი მაშინ კონსოლში გამოიტანეთ "ზრდასრულია". თუ 13-დან 17-მდეა მაშინ "მოზარდია". სხვა შემთხვევაში "ბავშვი"

let age = 16

switch(true) {
    case age >= 18:
        console.log("ზრდასრულია")
        break
    case age >= 13 && age <= 17:
        console.log("მოზარდია")
        break
    default:
        console.log("ბავშვი")
}
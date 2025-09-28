// 20. მომხმარებელს შემოატანინე რიცხვი და შეამოწმე, არის თუ არა ის 5-ის ჯერადი და არა 10-ის ჯერადი.

let num = Number(prompt("Enter any number: "))

if(num % 5 === 0 && num % 10 !== 0) {
    console.log("Your number is multiple of 5 and it isn't multiple of 10")
}
else{
    console.log(num)
}
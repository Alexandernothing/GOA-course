/*
3)შექმენი ობიექი რომელშიც იქნება მხოლოდ name 

შენი დავალებაა დაამატო ამ ობიექტშში გარედან author , year და amount

შემდეგ შეამოწმე არის თუ არა ობიექტში key სახელად name 

ასევე შემაოწმე არის თუ არა ობიექტშში key სახელად color
*/

let book = {
    name: "Harry Potter"
}

book.author = "J.K. Rowling"
book.year = 1997
book.amount = 40

console.log("name" in book)   
console.log("color" in book)  
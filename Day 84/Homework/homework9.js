// 9. მომხმარებელს შემოატანინეთ რიცხვი და სიტყვა. შეამოწმეთ ეგ სიტყვა თუ არის თქვენ მიერ ჩაფიქრებული სიტყვის ტოლი და რიცხვი თუა 10-ზე და 20-ზე ნაკლები.

let num = Number(prompt("Enter any number: "))
let word = prompt("Enter any word: ").toLowerCase()
let myword = "hello"

console.log(word == myword && num < 10 && num < 20)
// 18. მომხმარებელს შემოატანინე რიცხვი და შეამოწმე, არის თუ არა ის 0–10 შუალედში ან 90–100 შუალედში.

let num = Number(prompt("Enter any number: "))

if(num >= 0 && num <= 10 || num >= 90 && num <= 100) {
    console.log("Your number is either in between 0-10, or 90-100")
}
// 14. მომხმარებელს შემოატანინე რიცხვი და შეამოწმე, არის თუ არა ის 50–100 შუალედში ან ტოლი 200-ის.

let num = Number(prompt("Enter any number: "))

if(num >= 50 || num <= 100 || num == 200) {
    console.log("The number you entered is either in between of 50-100, or is equal to 200")
}
else{
    console.log(num)
}
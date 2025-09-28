// 17. მომხმარებელს შემოატანინე რიცხვი და შეამოწმე, არის თუ არა ის 20–30 შუალედში და ლუწი.

let num = Number(prompt("Enter any number: "))

if(num >= 20 && num <= 30 && num % 2 == 0) {
    console.log("Your number is in between 20-30 and is even")
}
else{
    console.log(num)
}
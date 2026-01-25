// 13. მომხმარებელს შემოატანინე ასაკი და შეამოწმე, არის თუ არა ის ან 16-ზე ნაკლები, ან 65-ზე მეტი.

let age = Number(prompt("Enter your age: "))

if(age > 16 || age > 65) {
    console.log("you are either younger than 16, or older than 65")
}
else{
    console.log(age)
}
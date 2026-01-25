// 12. მომხმარებელს შემოატანინე რიცხვი და შეამოწმე, იყოფა თუ არა 3-ზე.

let num = Number(prompt("Enter any number: "))

if(num % 3 == 0) {
    console.log(num, "divided by 3 doesn't have reminder")
}
else{
    console.log(num, "divided by 3 has reminder")
}
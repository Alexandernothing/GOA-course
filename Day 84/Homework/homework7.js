// 7. მომხმარებელს შემოატანინეთ რიცხვი. და შეამოწმეთ იყოფა თუ არა 3-ზე ან 2-ზე მაინც

let num = Number(prompt("Enter any number: "))

console.log(num % 3 == 0 || num % 2 == 0)
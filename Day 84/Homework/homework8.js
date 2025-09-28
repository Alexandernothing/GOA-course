// მომხმარებელს შემოატანინეთ რიცხვი. და შეამოწმეთ იყოფა თუ არა 4-ზე და 3-ზე ან 5-ზე მაინც

let num = Number(prompt("Enter any number: "))

console.log(num % 4 == 0 || num % 3 == 0 || num % 5 == 0)
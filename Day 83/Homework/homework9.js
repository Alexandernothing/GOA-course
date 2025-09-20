// 9. მომხმარებელს შემოატანინეთ რიცხვი და გამოიტანე დადებითია, უარყოფითი თუ ნულის ტოლია.

let num = Number(prompt("Enter any number: "))

if(num > 0) {
    console.log("Your number is positive")
}
else if(num < 0) {
    console.log("Your number is negative")
}
else{
    console.log("Your number is 0")
}
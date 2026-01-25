// 23. ამჯერად უკვე ლოგიკური ოპერატორების გამოყენებით გააკეთეთ, მომხმარებელს შემოატანინეთ რიცხვი და გამოიტანეთ შესაბამისი თვე და სეზონი.

let num = Number(prompt("Enter any number through 1-12"))

if(num == 1 || num == 2 || num == 12) {
    console.log("It is either: January, February, or December and it is Winter")
}
else if(num == 3 || num == 4 || num == 5) {
    console.log("It is either: March, April, or May and it is Spring")
}
else if(num == 6 || num == 7 || num == 8) {
    console.log("It is either: June, July, or August and it is Summer")
}
else if(num == 9 || num == 10 || num == 11) {
    console.log("It is either: September, October, or November and it is Autumn")
}
else{
    console.log("Incorrect input")
}
// 8. მომხმარებელს შემოატანინეთ რიცხვი. თუ რიცხვი არის ლუწი მაშინ აიყვანეთ კუბში, სხვა შემთხვევაში კვადრატში. (Math ობიექტი გამოიყენეთ)

let num = Number(prompt("Emter any num:"))

num % 2 === 0 ? console.log(Math.pow(num, 3)) : console.log(Math.pow(num, 2))
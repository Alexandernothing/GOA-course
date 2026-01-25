// 20. მომხმარებელს შემოატანინე 3 რიცხვი. თუ ამ სამი რიცხვის ჯამი იქნება ლუწი. მაშინ მათი საშუალო არითმეტიკული დააბრუნეთ. სხვა შემთხვევაში 2-ზე გაამრავლეთ

let num1 = Number(prompt("Enter first number: "))
let num2 = Number(prompt("Enter second number: "))
let num3 = Number(prompt("Enter third number: "))

if((num1 + num2 + num3) % 2 == 0) {
    console.log((num1 + num2 + num3) / 3)
}
else{
    console.log((num1 + num2 + num3) * 2)
}
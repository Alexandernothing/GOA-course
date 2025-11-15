// 4. მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ ლუწია თუ კენტი.

let usernum = Number(prompt("Enter any number: "))

if(usernum % 2 === 0) {
    console.log(usernum, "is even")
}
else{
    console.log(usernum, "is odd")
}
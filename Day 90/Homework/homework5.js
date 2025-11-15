// 5. მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ არის თუ არა 3-ის ჯერადი.

let usernum = Number(prompt("Enter any number: "))

if(usernum % 3 === 0) {
    console.log(usernum, "is the multiple of 3")
}
else{
    console.log(usernum, "isn't multiple of 3")
}
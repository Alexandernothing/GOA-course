// 2. შემოატანინეთ მომხმარებელს სახელი და ასაკი, თუ სახელი და ასაკიც ემთხვევა თქვენსას მაშინ გამოიტანეთ კონსოლში შედეგი.სხვა დანარჩენ შემთხვევაში 'ჩვენი ასაკი ან სახელები განსხვავდება'.

let name1 = prompt("Enter your name: ").toLowerCase()
let age1 = Number(prompt("Enter your age: "))
let name2 = "aleqsandre"
let age2 = 13

if(name1 == name2 && age1 == age2) {
    console.log("ერთნაირი სახელი და ასაკი გვაქვს")
}
else{
    console.log("ჩვენი ასაკი ან სახელები განსხვავდება")
}
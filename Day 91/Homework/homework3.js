// შექმენით 5 ელემენტიანი სია, მომხმარებლის შემოტანილი მნიშვნელობა დაამატეთ ამ სიაში იმ შემთხვევაში თუ ეს ელემენტი არ არის სიაში, თუ არის მაშინ ამოშალეთ. და კონსოლში გამოიტანეთ ახალი სია.

let list = [1, 2, 3, 4, 5]
let userlist = Number(prompt("Enter any number 1-5: "))

if(list.includes(userlist)) {
    list.splice(userlist, 1)
}
else{
    list.push(userlist)
}

console.log(list)
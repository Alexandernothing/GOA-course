// 1) შექმენით ცვლადი სადაც შეინახავთ თქვენს სახელს,მომხმარებელს შემოტანინე ასაკი და სახელი,თ მომხმარებლის მიერ შემოტანილი სახელი უდრის შენს სახელს და ასაკი არის მეტი 18 ზე კონსოლში გამოიტანე---> "we have same name and you are more than 18 yo" ,შემდეგ შეამოწმეთ,თუ მომხმარებლის მიერ შემოტანილი ასაკი არის 18 ზე მეტი მაგრამ მომხმარებლის მიერ შემოტანილი სახელი არ უდრის თქვენს სახელს დაუკონსოლლოგეთ --> "We do not have same names but you are more than 18 yo" , სხვა შემთხვევაშ დაუკონსოლლოგეთ --> "vin jandaba xar"

let Name1 = "aleqsandre"
let Name2 = prompt("Enter your name: ").toLowerCase()
let age = Number(prompt("Enter your age: "))

if(Name1 == Name2 && age > 18) {
    console.log("we have same name and you are more than 18 years old")
}
else if(age > 18 && Name1 !== Name2) {
    console.log("We do not have same names but you are more than 18 years old")
}
else{
    console.log("vin jandaba xar"
)
}
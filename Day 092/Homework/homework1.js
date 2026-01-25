//1. მომხმარებელს შემოატანინეთ სიტყვა. ეს სიტყვა ჩაამატეთ სიის თავში იმ შემთხვევაში თუ ეს სიტყვა არ არის ამ სიაში. სხვა შემთხვევაში თვითონ ეს სიტყვა შეაბრუნეთ და სიის ბოლოში ჩაამატეთ.

let userword = prompt("Enter any word: ")
let list = ["math", "chemistery", "physics", "biology"]

if(list.includes(userword)) {
    let reversed = ""
    for(let i = userword.length - 1;i >= 0;i--) {
        reversed += userword[i]
    }
    list.push(reversed)
}
else{
    list.unshift(userword)
}

console.log(list)
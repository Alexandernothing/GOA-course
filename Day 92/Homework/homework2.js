// 2. მოცემული გაქვთ სია, [10, 20, 30, 100, 40, 'Goa' ]. მომხმარებელს შემოატანინეთ ტექსტი და შეამოწმეთ არის თუ არა ეს ტექსტი ამ სიაში.

let list = [10, 20, 30, 100, 40, 'Goa' ]
let user = prompt("Enter any text: ")

for(let i = 0;i < list.length - 1;i++) {
    if(user == list[i]) {
        console.log("Your word is in the list")
    }
    else{
        console.log("Your word isn't on the list")
    }
}
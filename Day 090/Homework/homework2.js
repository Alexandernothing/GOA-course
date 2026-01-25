// 2. მომხმარებელს შემოატანინეთ ტექსტი და ამ ტექსტის პირველი და ბოლო სიმბოლოები გამოიტანეთ ერთად.

let usertext = prompt("Enter text: ")
let empty = ""

for(let i = 0;i <= usertext.length - 1;i++) {
    if(i === 0 || i === usertext.length - 1) {
        empty += usertext[i]   
    }
}

console.log(empty)
// 3. მომხმარებელს შემოატანინეთ რიცხვი. და ამ რიცხვის გამყოფები გამოიტანეთ სიის სახით.

let num = Number(prompt("Enter num: "))
let empty = []

for(let i = num;0 < i;i--) {
    empty.unshift(i)
}
for(let i = 0;i < empty.length;i++) {
    if(num % empty[i] === 0) {
        console.log(empty[i])
    }
}
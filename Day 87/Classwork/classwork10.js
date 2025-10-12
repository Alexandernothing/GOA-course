// 10. მომხმარებელს შემოატანინეთ რიცხვი და ამ რიცხვიდან 0-მდე გამოიტანეთ ყველა რიცხვი

let num = Number(prompt("Enter any number: "))

for(let i = num;i > 0;i = i - 1) {
    console.log(i)
}
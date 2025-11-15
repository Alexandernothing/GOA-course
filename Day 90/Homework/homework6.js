// 6. მომხმარებელს შემოატანინეთ რიცხვი და ამ რიცხვის ჩათვლით ყველა რიცხვი გადაამრავლეთ.

let usernum = Number(prompt("Enter any number: "))

for(let i = 1;i < usernum;i++) {
    i = i * i
    console.log(i)
}
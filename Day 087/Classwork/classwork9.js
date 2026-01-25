// 9. მომხმარებელს შემოატანინეთ რიცხვი და ამ რიცხვის ჩათვლით გამოიტანეთ ყველა ლუწი რიცხვი

let num = Number(prompt("Enter any number: "))

for(let i = 0;i < num + 1;i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}
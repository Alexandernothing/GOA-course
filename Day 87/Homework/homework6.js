/* 6. მომხარებლის შემოტანილი რიცხვის ჩათვლით გამოიტანეთ ყველა რიცხვი და გვერდით ეწეროს ლუწია თუ კენტი. მაგალითად ასე:
“1 არის კენტი”
“2 არის ლუწი”
*/

let num = Number(prompt("Enter any number: "))

for(let i = 0;i <= num;i++) {
    if(i % 2 == 0) {
        console.log(i,"is even")
    }
    else{
        console.log(i,"is odd")
    }
}
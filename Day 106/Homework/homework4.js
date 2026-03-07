/* 
4. შექმენით ფუნქცია, სადაც არგუმენტად გადაეცემა ფუნქციას მომხმარებლის შემოტანილი რიცხვი. switch / case გამოყენებით . თუ ქულა არის
   100 მაშინ დააბრუნეთ "საუკეთესო შედეგია, ყოჩაღ"
   90-დან 100 შუალედში - A
   80-დან 89 შუალედში  - B
   70-დან 79 შუალედში  - C
   55-დან 69 შუალედში - D
   55 -ზე ნაკლებია მაშინ - F
   სხვა შემთხვევაში "არასწორად შემოიტანეთ ქულა"
*/

let user = Number(prompt("შეიყვანე ის ქულა, რომელიც მიიღე:"))

switch(true) {
    case user === 100:
        console.log("საუკეთესო შედეგია, ყოჩაღ")
        break
    case user >= 90 && user < 100:
        console.log("A")
        break
    case user >= 80 && user < 90:
        console.log("B")
        break
    case user >= 70 && user < 80:
        console.log("C")
        break
    case user >= 55 && user < 70:
        console.log("D")
        break
    case user < 55:
        console.log("F")
        break
    default:
        console.log("არასწორად შემოიტანეთ ქულა")
        break
}
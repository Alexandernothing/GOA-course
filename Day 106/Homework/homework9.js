/*
9. მომხმარებელს შემოატანინეთ კვირის დღე და თანხა. თუ 
ორშაბათია, გაუკეთეთ 5% ფასდაკლება,
სამშაბათი - 10%
ოთხშაბათი - 15%
ხუთშაბათი - 20%
პარასკევი - 25%
შაბათი - 50%
კვირა - 50%
სხვა შემთხვევაში, "ასეთი დღე ან თანხა არ არსებობს"
*/

// swicth / case

let day = prompt("Enter any day of the week:").toLowerCase()
let amount = Number(prompt("Enter your amount of money:"))

switch(day) {
    case "monday":
        console.log(amount - amount * 5 / 100)
        break
    case "tuesday":
        console.log(amount - amount * 10 / 100)
        break
    case "wednesday":
        console.log(amount - amount * 15 / 100)
        break
    case "thursday":
        console.log(amount - amount * 20 / 100)
        break
    case "friday":
        console.log(amount - amount * 25 / 100)
        break
    case "saturday":
        console.log(amount - amount * 50 / 100)
        break
    case "sunday":
        console.log(amount - amount * 50 / 100)
        break
    default:
        console.log("ასეთი დღე ან თანხა არ არსებობს")
        break
}

// ternary operator??
// 21. მომხმარებელს შემოატანინე წელი და შეამოწმე, არის თუ არა ის ნაკიანწლიანი (იყოფა 4-ზე და არა 100-ზე, ან იყოფა 400-ზე).

let year = Number(prompt("Enter any year: "))

if(year % 4 === 0 && year % 100 !== 0) {
    console.log("Your year is year of rest")
}
else{
    console.log(year)
}
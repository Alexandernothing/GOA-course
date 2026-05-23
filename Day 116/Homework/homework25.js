// 25. შექმენით ცვლადი სადაც შეინახავთ ნებისმიერ რიცხვს. დააბრუნეთ შესაბამისი კვირის დღე.

let day = 3
let result = day === 1 ? "Monday" : day === 2 ? "Tuesday" : day === 3 ? "Wednesday" : day === 4 ? "Thursday" : day === 5 ? "Friday" : day === 6 ? "Saturday" : day === 7 ? "Sunday" : "Invalid day"

console.log(result)
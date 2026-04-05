// 5. შექმენით სია სადაც იქნება მინიმუმ 5 რიცხვი. გადაუარეთ ამ სიას და კვადრატში აიყვანეთ თითოეული მათგანი. შემდეგ წამოიღეთ მხოლოდ ისეთი რიცხვები რომლებიც არის ორნიშნა

let list = [1, 2, 3, 4, 5]

let preResult = list.map((num) => num = num ** 2)
let result = preResult.filter((i) => String(i).length === 2)
console.log(result)
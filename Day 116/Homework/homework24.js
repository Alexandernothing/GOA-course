// 24. შექმენით სია. თუ ამ სიის სიგრძე არის 5-ზე მეტი, მაშინ ბოლო ელემენტი ამოშალეთ. თუ ნაკლებია მაშინ ჩაამატეთ თქვენი სახელი.

let list = ["How", "are", "you"]
list.length > 5 ? list.pop() : list.push("Aleqsandre")

console.log(list)
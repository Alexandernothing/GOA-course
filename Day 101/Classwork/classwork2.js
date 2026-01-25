// 2. შექმენით მანქანის ობიექტი. სადაც იქნება ბრენდი, მოგწონთ თუ არა (true/false) და გამოშვების წელი. შემდეგ გაანახლეთ გამოშვების წელი და დაამატეთ მოდელი. წაშალეთ მოგწონთ თუ არა.

let car = {
    brand: "BMW",
    like: true,
    yearRelease: 2015
}

car["brand"] = "Jiguli"
car["yearRelease"] = "1995"

delete car["like"]

console.log(car)
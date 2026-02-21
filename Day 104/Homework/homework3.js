// 3. შექმენით ობიექტი სადაც შეინახავთ თქვენს იმფორმაციას. მის შიგნით შექმენით მეთოდი რომელიძ გამოძახების შემდეგ თქვენი ასაკის მნიშვნელობას გაზრდის 1-ით.

const object = {
  name: "Aleqsandre",
  age: 13,        
  increaseAge: function() {
    this.age += 1
  }
}

object.increaseAge()
console.log(object.age)
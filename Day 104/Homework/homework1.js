// 1. შექმენით ობიექტი რომელშიც იქნება ოთხი მეთოდი (შეკრება, გამოკლება, გამრავლება, გაყოფა). და თითოეულ მათგანს ჰქონდეს ორი პარამეტრი, რომელსაც გამოძახების დროს გადაეცემა არგუმენტად თქვენ მიერ არჩეული რიცხვი.

let object = {
    add: function(a, b) {
        console.log(a + b)
    },
    subtract: function(a, b) {
        console.log(a - b)
    },
    multiple: function(a, b) {
        console.log(a * b)
    },
    divide: function(a, b) {
        console.log(a  / b)
    }
}

object.add(2, 4)
object.subtract(1234567899654, 0.0987654321234567890)
object.multiple(9183, 1384)
object.divide(4567, 678)
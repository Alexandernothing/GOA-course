/*
8)შექმენი ფუნციადა გადაეცი ორია რგუმენტი a და b
,ასევე დაამატე მეთოდები add() minus() რომელიც შეკრებსამ რიცხვებს და მეორე მეთოდი გამოაკლებს ,შექმენი ობიექტებიდ ა შეინახე ცვლადებში,ამ ცვლადებზე(ანუ ობიექტებზე) გამოიძახეთ მეთოდები
*/

function calculator(a, b) {
  return {
    add: function () {
      return a + b
    },
    minus: function () {
      return a - b;
    }
  }
}

let num1 = createCalculator(10, 5)
let num2 = createCalculator(20, 10)
let num3 = createCalculator(30, 15)

console.log(num1)
console.log(num2)
console.log(num3)
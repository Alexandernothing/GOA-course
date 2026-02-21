// 3. შექმენით ობიექტი სადაც იქნება აუცილებლად მოსწავლის სახელი, ასაკი, და ქულები რომლებიც სიაში ეწერება. ასევე შექმენით მეთოდი რომელიც გამოითვლის ქულების საშუალოს. და მეორე მეთოდი რომელიც მინიმალურ ქულას დააბრუნებს.

let student = {
    name: "Aleqsandre",
    age: 13,
    auras: [10, 20, 30, 25, 5],
    average: function() {
        let sum = 0
        for(let i of this.auras) {
            sum += i
        }
        console.log(sum / this.auras.length)
    },
    min: function() {
        let num = 1
        for(let i of this.auras) {
            for(let ii of this.auras) {
                if(i < ii) {
                    num = i
                }
            }
            
        }
        console.log(num)
    }
}

student.average()
student.min()
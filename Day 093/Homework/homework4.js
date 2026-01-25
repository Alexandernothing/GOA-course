// 4. შექმენით სია, სადაც ეწერება ამ ჯგუფის მოსწავლეების სახელები.  დააჯგუფეთ ლუწ ინდექსზე მდგომი სახელები ცალკე და კენტ ინდექსზე მდგომი სახელები ცალკე.

let Goa19_20 = ["Aleqsandre", "Aleqsandre", "Giorgi", "Giorgi", "Iakobi", "Luka", "Luka", "Mate", "Nika", "Zuka", "Levani"]
let even = []
let odd = []

for(let i = 0;i < Goa19_20.length;i++) {
    if(i % 2 == 0) {
        even.push(Goa19_20[i])
    }
    else{
        odd.push(Goa19_20[i])
    }
}

console.log("Even -", even)
console.log("Odd -", odd)
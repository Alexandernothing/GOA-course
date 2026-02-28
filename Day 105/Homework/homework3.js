// 3. შექმენით სია, სადაც იქნება ნებისმიერი ტიპის მონაცემი. და წამოიღეთ რენდომულად რომელიმე ინდექსზე მყოფი სიმბოლო.

let list = ["true", true, false, "false", 3]
let num = Math.floor(Math.random() * list.length) 

console.log(list[num])
// 5. შექმენით მინიმუმ 5 ელემენტიანი სია, რიცხვებიც იყოს და სტრინგებიც. ამ სიას გადაუარეთ და ყველა რიცხვი გადაამრავლეთ ერთმანეთზე.

let list = [1, "a", 2, "b", 3]
let sum = 0

for(let i = 0;i < list.length;i++) {
    if(list[i] === Number(list[i])) {
        sum += list[i]
    }
}

console.log(sum)
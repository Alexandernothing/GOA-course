// 5. შექმენით მინიმუმ 5 ელემენტიანი სია, რიცხვებიც იყოს და სტრინგებიც. ამ სიას გადაუარეთ და ყველა რიცხვი გადაამრავლეთ ერთმანეთზე.

let list = [1, "a", 2, "b", 3]
let multiple = 1

for(let i = 0;i < list.length;i++) {
    if(list[i] === Number(list[i])) {
        multiple *= list[i]
    }
}

console.log(multiple)
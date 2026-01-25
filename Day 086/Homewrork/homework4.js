/* შეიყვანე ასაკი და ენერგიის დონე (1–10).
თუ ასაკი 20-ზე ნაკლებია და ენერგია მეტია 7-ზე → "გირჩევ სირბილს!",
თუ ენერგია ნაკლებია 4-ზე → "გირჩევ დასვენებას!",
სხვა შემთხვევაში → "გააგრძელე ჩვეულებრივად!" */

let age = Number(prompt("Enter your age: "))
let energy = Number(prompt("Enter your energy level 1-10: "))

if(age < 20 && energy > 7) {
    console.log("I reccomend you to start running!")
}
else if(age < 20 && energy < 4) {
    console.log("I reccomend you to rest!")
}
else{
    console.log("Continue as usual!")
}
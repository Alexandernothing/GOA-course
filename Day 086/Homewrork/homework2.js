/* მომხმარებელს შეეკითხე ქულა (0–100).
თუ ქულა 90-ზე მეტია → "შესანიშნავი!"
თუ 70–90 შორისაა → "კარგია!"
თუ 50–70 შორისაა → "საშუალო შედეგი!"
თუ ნაკლებია 50-ზე → "მეტი უნდა იმეცადინო!" */

let score = Number(prompt("What did you get on your test? "))

if(score > 90){
    console.log("Excellent!")
}
else if(score >= 70 && score <= 90) {
    console.log("Good!")
}
else if(score >= 50 && score < 70) {
    console.log("Avarege result!")
} 
else if(score < 50) {
    console.log("You should study more!")
}
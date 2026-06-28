/* 2)html document ში შექმენით 5 პარაგრაფი 

თქვენი დავალებაა რომ წამოიღოთ ელემენტები getElementsByTagName() ით და კონსოლში გამოიტანოთ თითოეული მათგანი ცალ ცალკე
*/

let p = document.getElementsByTagName("p")

for(let i of p) {
    console.log(i)
}
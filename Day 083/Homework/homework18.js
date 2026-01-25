// 18. გააკეთეთ მინი ჯეირანი. მომხმარებელს უნდა შემოატანინოთ ჭა, მაკრატელი ან ფურცელი. მეორე ცვლადში შეინახეთ თქვენ რაც გინდათ. და გამოიტანეთ შედეგი.

let rps = prompt("Choose one of these: rock, paper, or scissors")
let myrps = "paper"

if(rps == "rock") {
    console.log("You unfortunetly lost, I chose paper")
}
else if(rps == "paper") {
    console.log("We drew, I chose paper too")
}
else if(rps = "scissors") {
    console.log("You won! I chose paper")
}
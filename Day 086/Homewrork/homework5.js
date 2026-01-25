/* 5. შეიყვანე რიცხვი 1–10.
თუ ტოლია 7-ის ან 3-ის → "გაიმარჯვე!",
თუ მეტი 8-ზე → "ძალიან მაღალი!",
თუ ნაკლებია 2-ზე → "ძალიან დაბალია!",
სხვა შემთხვევაში → "ცადე კიდევ!". */

let num = Number(prompt("Enter number 1-10: "))

if(num == 7 || num == 3) {
    console.log("You won!")
}
else if(num > 8) {
    console.log("Too high!")
}
else if(num < 2) {
    console.log("Too low!")
}
else{
    console.log("Try again")
}
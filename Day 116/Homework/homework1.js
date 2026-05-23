// 1. for loop - ის გამოყენებით 50-მდე ყველა ლუწი რიცხვი შეკრიბეთ და გადაამრავლეთ კენტების ჯამზე.

let sum1 = 0
let sum2 = 0

for(let i = 0;i < 50;i++) {
    if(i % 2 === 0) {
        sum1 += i
    }
    else {
        sum2 += i
    }
}

console.log(sum1 * sum2)
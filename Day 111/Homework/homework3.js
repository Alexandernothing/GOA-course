// 3. შექმენით სია სადაც იქნება bool ტიპის (true, false) მნიშვნელობები. და დააბრუნეთ თუ ამ სიაში ყველა არის true თუ არა.

let list = [true, false, 1 + 1 === 3, 1 - 3 === -2]
let truth = true

for(let i = 0;i < list.length;i++) {
  if (list[i] !== true) {
    truth = false
  }
}

console.log(truth)
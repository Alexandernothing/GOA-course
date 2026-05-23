// 12. შექმენით სია სადაც იქნება სტრინგები. გადაუარეთ მას და გამოიტანეთ თითოეული სტრინგი upper case-ად.

let list = ["hello", ",", "world", "!"]
let upper = list.map(i => i.toUpperCase())

console.log(upper)
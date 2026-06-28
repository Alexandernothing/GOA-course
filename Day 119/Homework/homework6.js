// 6. საიტზე დაამატეთ ერთი დივი. ამ დივის შიგნით ჩაამატეთ ბევრი განსხვავებული თეგი. და კონსოლში გამოიტანეთ ამ დივის შიგნით მყოფი ყველა თეგი.

let div = document.getElementsByTagName("div")

for(let i of div) {
    console.log(i)
}
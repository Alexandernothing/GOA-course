// 2. მოცემული გაქვთ სია: ['01001011100', '100111110', '110101010']. ამ სიის თითოეული ელემენტი არის ორობით სისტემაში. გადაიყვანეთ ათობითში და ჩაამატეთ ახალ სიაში.

let list = ['01001011100', '100111110', '110101010']
let empty = []

for(let i = 0;i < list.length;i++) {

    let result = 0
    let lastindex = list[i].length - 1

    for(let index = 0;index < list[i].length;index++) {
        result += list[i][index] * 2 ** lastindex
        lastindex--
    }
    empty.push(result)
}

console.log(empty)
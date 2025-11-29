/* 7. მოცემული გაქვთ სია:
[
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0], 
    [0, 1, 0, 0, 1]
] // ერთი სია არის და ამ სიის შიგნით სამი სია,

თითოეული ეს სია შეაერთეთ და გადაიყვანეთ ათობით სისტემაში. შემდეგ დაალაგეთ კლებადობით.
*/

let bannaryNumbers = [
    [1, 0, 0, 1, 0], // 10010
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1]
]

for (let index = 0; index < bannaryNumbers.length; index++) {
    let binNum = ''
    for (let listIndex = 0; listIndex < bannaryNumbers[index].length; listIndex++) {
        console.log(bannaryNumbers[index][listIndex])
        binNum += bannaryNumbers[index][listIndex]
    }
    bannaryStrings.push(binNum)
}

for (let index = 0; index < bannaryStrings.length; index++) {
    console.log(bannaryStrings[index])

    let result = 0
    let lastIndex = bannaryStrings[index].length - 1

    for (let num = 0; num < bannaryStrings[index].length; num++) {
        result += bannaryStrings[index][num] * 2 ** lastIndex
        lastIndex--
    }
    numberList.push(result)
}

console.log(numberList)

let maxNum = numberList[0]
for (let index = 0; index < numberList.length; index++) {
    if (maxNum < numberList[index]) {
        maxNum = numberList[index]
    }
}

numberList.splice(numberList.indexOf(maxNum), 1)
maxNum = numberList[0]
for (let index = 0; index < numberList.length; index++) {
    if (maxNum < numberList[index]) {
        maxNum = numberList[index]
    }
}

console.log(maxNum)

// 2. შექმენი სია სადაც იქნება ჩამოწერილი სახელები (ზოგი განმეორდება). თქვენი დავალებაა რომ დააბრუნოთ ობიექტის სახით თითოეული სახელი რამდენჯერ მეორდება (key იქნება თვითონ სახელი და value რაოდენობა)

let list = ["Aleqsandre", "Giorgi", "Nika", "Anastasia", "Ika", "Aleqsandre", "Ika"]

let count = list.reduce((acc, curr) => {
    if(acc[curr]) {
        acc[curr] += 1
    }
    else {
        acc[curr] = 1
    }

    return acc
}, {})

console.log(count)
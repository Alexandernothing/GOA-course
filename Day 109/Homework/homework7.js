// 7. შექმენით სია სადაც რიცხვები. თუ რიცხვი არის 3-ის ჯერადი მაშინ დაუმატეთ თავისი ინდექსი. სხვა შემთხვევაში გაამრავლეთ ორზე.

let list = [1, 3, 2, 6, 4, 9]

let result = list.map((i, index) => {
    if(i % 3 === 0) {
        return i + " " + index
    }
    else {
        return i * 2
    }
})
console.log(result)
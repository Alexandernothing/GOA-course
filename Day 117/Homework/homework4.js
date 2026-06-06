// 1. შექმენით სია სადაც იქნება რიცხვები. თუ რიცხვი ლუწია მაშინ ჯამი გაამრავლეთ ამ რიცხვზე, თუ კენტია უბრალოდ მიუმატეთ და დააბრუნეთ შედეგი

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = list.reduce((acc, curr) => {
    if(curr % 2 === 0) {
        return acc * curr
    }
    else {
        return acc + curr
    }
}, 1)

console.log(result)
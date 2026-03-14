// 3. შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ რიცხვზე დაგვიბრუნებს ზუსტად ამოდის თუ არა ფესვი, თუ არ ამოდის მაშინ ამ რიცხვს აიყვანს კვადრატში (ტერნარი გამოიყენეთ).

let sqr = (num) => {
    let numm = Math.sqrt(num) 
    let length = String(numm).length
    let str = String(numm)
    let empty = []

    for(let i = 0;i < length;i++) {
        empty.push(str[i])
    }
    empty.includes(".") ? console.log(Math.pow(num, 2)) : console.log(numm)
}
sqr(9)

let fun = function(number) {
    let numberr = Math.sqrt(num) 
    let lengthh = String(numberr).length
    let strr = String(numberr)
    let emptyy = []

    for(let ii = 0;ii < lengthh;ii++) {
        emptyy.push(strr[ii])
    }
    emptyy.includes(".") ? console.log(Math.pow(number, 2)) : console.log(numberr)

}
sqr(10)
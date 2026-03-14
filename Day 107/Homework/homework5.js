/*
5. შექმენით ფუნქცია, რომელიც არგუმენტად გადაცემულ სტრინგს დაშლის და ობიექტის სახით დაგვიბრუნებს რომელი სიმბოლო რამდენჯერ მეორდება.
მაგალითად:
"Goa Academy" 
შედეგი: 
g: 1,
o: 1,
a: 3,
c: 1,
d: 1,
e: 1,
m: 1,
y: 1
*/

let countFunc1 = (value) => {
    let obj = {

    }
    for(let i of value) {
        if(Object.keys(obj).includes(i.toLowerCase())) {
            obj[i.toLowerCase()] += 1
        }
        else {
            obj(i.toLowerCase()) = 1
        }
    }
    return obj
}
console.log(countFunc1("Goa Academy"))

let countFunc2 = function(value) {
    let obj = {

    }
    for(let i of value) {
        if(Object.keys(obj).includes(i.toLowerCase())) {
            obj[i.toLowerCase()] += 1
        }
        else {
            obj(i.toLowerCase()) = 1
        }
    }
    return obj
}
console.log(countFunc2("Goa Academy"))
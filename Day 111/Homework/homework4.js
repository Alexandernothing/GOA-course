// 4. შექმენით მასივი სადაც იქნება დუბლიკატი მნიშვნელობები. თქვენი დავალებაა ამოშალოთ დუბლიკატები.

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8]
let empty = []

for(let i of list) {
    if(!empty.includes(i)) {
        empty.push(i)
    }
}

console.log(empty)
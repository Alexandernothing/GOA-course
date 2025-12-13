// 3. შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად სია. ამ სიაში უნდა იყოს მინიმუმ 5 რიცხვი. ფუნქციამ უნდა დააბრუნოს ამ სიაში მყოფი რიცხვების ჯამი.
 
function listsum(list) {
    let sum = 0
    for(let i = 0;i < list.length;i++) {
        sum += list[i]
    }
    return sum
}

console.log(listsum([1, 2, 3, 4, 5]))
console.log(listsum([444298765, 6543, 2, 4, 5, 56]))
console.log(listsum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
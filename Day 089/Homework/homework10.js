/*10)შექმენი სია სადაც მოათავსებ ადამიანის სახელებს

შენი დავალებაა რომ კონსოლში გამოიტანო მხოლოდ ის სახელები რომლებიც იწყება ასო "a" ზე და მრთავდება ასო "o" ზე (შეასრულეთ ორივეთი for და while)
 */

let list = ["aleqsandre", "gio", "nikolozi", "anano", "andro"]

for(let i = 0;i < list.length;i++) {
    if(list[i][0] === "a" && list[i][list[i].length -1] === "o")
        console.log(list[i])
}

console.log("---------------------------------")

ii = 0

while(ii < list.length) {
    if(list[ii][0] === "a" && list[ii][list[ii].length -1] === "o")
    console.log(list[ii])
    ii++
}
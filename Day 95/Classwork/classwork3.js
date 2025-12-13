/* 5)შექმენი ფუქნცია რომელსაც გადაეცემა სტრინგების სია,შენიდ ავალებაა რომ ახალ სიაში გადაყარო ის ელემენტები რომელშიც ურევია ასო "ა" და დააბრუნო ახალი სია
*/

function str(list) {
    let new_list = []
    for(let i = 0;i < list.length;i++) {
        if(list[i].includes("a")) {
            new_list.push(list[i])
        }
    }
    return new_list
}

console.log(str(["Goa", "iujk", "jsaa", "imub"]))
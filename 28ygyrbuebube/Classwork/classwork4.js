/*6)შექმენი ფუქნცია რომელსაც გადასცემ რიცხვების სიას,ოღონდ ეს რიცხვები უ ნდა იყოს სტრრინგ ტიპის,შენი დავალებაა რომ იპოვო თითეულ რიცხვის ციფრების ჯამი და დააბრუნო სია სადაც იქნება თითეულიი რიცხვის ციფრების ჯამი */

function num(list) {
    let new_list = []
    for(let i = 0;i < list.length;i++) {
        let sum = 0
        for(let index = 0;index < list[i].length;index++) {
            sum += Number(list[i][index])
        }
        new_list.push(sum)
    }
    return new_list
}

console.log(num(["566", "678", "98"]))
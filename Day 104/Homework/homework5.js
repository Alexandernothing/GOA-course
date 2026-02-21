// 5. შექმენით ობიექტი, სადაც იქნება სია. სიაში უნდა იყოს სხვადასხვა ტიპის მონაცემები და მინიმუმ 10 ელემენტი. შიგნით შექმენით ისეთი მეთოდი რომელიც მხოლოდ Number ტიპის მონაცემებს გადაამრავლებს ერთმანეთზე.

let object = {
    list: ["Hello", true, 5, "World", false, 87, "!", 2135654, "ihjn", true],
    method: function() {
        let multiply = 1

        for (let i = 0; i < this.list.length; i++) {
            let index = this.list[i]
            if (typeof index === "number") {
                multiply *= index
            }
        }
        return multiply
    }
}

console.log(object.method())
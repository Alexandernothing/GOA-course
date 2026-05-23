// 14. შექმენით სია სადაც იქნება ობიექტები მანქანების შესახებ. ახალ სიაში დააბრუნეთ ამ მანქანების ბრენდები.

let list = [{brand: "BMW", year: 2020}, {brand: "Mercedes", year: 2022}, {brand: "Audi", year: 2021}]
let newList = list.map(i => i.brand)

console.log(newList)
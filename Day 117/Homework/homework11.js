// 11. შექმენით Factory ფუნქცია createBook(title, author, price), რომელიც დააბრუნებს ობიექტს ამ თვისებებით. ობიექტს შიგნითვე უნდა ჰქონდეს მეთოდი getInfo(), რომელიც კონსოლში დაბეჭდავს ტექსტს: "წიგნი: [title], ავტორი: [author], ფასი: [price] ლარი".

function createBook(title, author, price) {
    return {
        title,
        author,
        price,
        getInfo() {
            console.log(`წიგნი: ${this.title}, ავტორი: ${this.author}, ფასი: ${this.price} ლარი`)
        }
    }
}

let book1 = createBook("ვეფხისტყაოსანი", "შოთა რუსთაველი", 25)
let book2 = createBook("გმირთა ვარამი", "ლევან გოთუა", 20)

book1.getInfo()
book2.getInfo()
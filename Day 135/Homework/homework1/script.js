/*
    მიიყვანეთ პროექტი შემდეგ დონემდე --> დაასრულეთ კალათაში დამატების ფუნქცია , პროდუქტზე დაჭერის შედეგად პროდუქტი უნდა დაემატოს კალათში(კალათაც გასტილეთ ისე რომ ლამაზად დაემატოს ელემენტები კალათაში .დანარჩენს შემდეგ გაკვეთილზე გავაგრძელებთ
*/

let products = document.querySelectorAll(".children")
let cart = []
let cartItems = document.querySelector(".cart")
let count = document.getElementById("count")

products.forEach((i) => {
    let button = i.querySelector("button")
    button.addEventListener("click", () => {
        let name = i.querySelector("p").textContent
        let category = i.querySelector("span").textContent
        let price = Number(i.querySelector("h5").textContent.slice(1, -1))

        cart.push({
            name: name,
            category: category,
            price: price
        })
    })
})

function reorder() {
    cartItems.innerHTML = ""
    cart.forEach((i) => {
        cartItems.innerHTML += '
            <div></div>
        '
    })
}
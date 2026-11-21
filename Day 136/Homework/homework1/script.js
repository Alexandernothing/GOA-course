/*
    https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d   ---> მიიყვანეთ ეს პროექტი იქამდე სადამდეც გაკვეთილზე მივედით --> დაამატეთ პროდუქტის რაოდენობის გაზრდის/შემცირების ფუქნცია , ასევე საბოლოო ფასის გამოთვლის ფუქნცია და ასევე პროდუქტის ამოშლის ფუნქცია კალათიდან
*/

let products = document.querySelectorAll(".children")
let cart = []
let cartItems = document.querySelector(".cart")
let count = document.getElementById("count")
let emptyDiv = document.querySelector(".item-box")

products.forEach((i, index) => {
    let button = i.querySelector("button")
    button.addEventListener("click", () => {
        let name = i.querySelector("p").textContent
        let category = i.querySelector("span").textContent
        let price = Number(i.querySelector("h5").textContent.slice(1, -1))
        let exists = cart.find(i => i.id === index)
        if(exists) {
            exists.quantity++
        }
        else {
            cart.push({
                name: name,
                id: index,
                category: category,
                price: price,
                quantity: 1
            })
        }

        reorder()
    })
})

function Overall() {
    let total = 0
    cart.forEach((item) => {
        total += item.price * item.quantity
    })
    return total
}

function reorder() {
    cartItems.innerHTML = ""
    if(cart.length === 0) {
        emptyDiv.style.display = "block"
    }
    else {
        emptyDiv.style.display = "none"
    }


    cart.forEach((i) => {
        cartItems.innerHTML += `
            <div class="new-products">
                <h4>${i.name}</h4>
                <p>$${i.price}</p>
                <div class="js-buttons"> 
                    <button class="b1"> <span class="spans plus">+</span> <span class="quan">${i.quantity}</span> <span class="spans minus">-</span> </button>
                    <button class="b2"><span>Delete</span></button>            
                </div>
                <p class="total">$${i.quantity * i.price}</p>
            </div>
        `    
    })

    if(cart.length > 0) {
        cartItems.innerHTML += `<h3>Overall price: $<span class="overall">${Overall()}</span></h3>`
    }

    let cards = cartItems.querySelectorAll(".new-products")
    cards.forEach((item, i) => {
        let prod = cart[i]
        let plus = item.querySelector(".plus")
        let minus = item.querySelector(".minus")
        let del = item.querySelector(".b2")
        let counting = item.querySelector(".quan")
        let totalPrice = item.querySelector(".total")

        plus.addEventListener("click", () => {
            prod.quantity++
            counting.textContent = prod.quantity
            totalPrice.textContent = `$${prod.quantity * prod.price}`
            let overallAll = cartItems.querySelector(".overall")
            if(overallAll) {
                overallAll.textContent = Overall()
            }
        })

        minus.addEventListener("click", () => {
            if(prod.quantity > 1) {
                prod.quantity--
                counting.textContent = prod.quantity
                totalPrice.textContent = `$${prod.quantity * prod.price}`
                let overallAll = cartItems.querySelector(".overall")
                if(overallAll) {
                    overallAll.textContent = Overall()
                }
            }
        })

        del.addEventListener("click", () => {
            cart = cart.filter(cartItem => cartItem.id !== prod.id)
            reorder()
        })
    })
}
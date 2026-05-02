/*
3)შექმენი ობიექტი სადაც არის _items → მასივი ობიექტების:
{ name: "apple", price: 5, qty: 2 } ... სხვა ობიექტების სხვადასვხ მნშვნელობებით

მეთოდები:

addItem(product)
removeItem(index)
clear()

getter:

დააბრუნოს ყველა პროდუქტის ფასი --> totalPrice

*/

let obj = {
    _items: [
        { name: "apple", price: 5, qty: 2 },
        { name: "banana", price: 3, qty: 4 },
        { name: "milk", price: 6, qty: 1 }
    ],
    add: function(product) {
        this._items.push(product)
    },
    remove: function(index) {
        this._items.splice(index, 1)
    },
    clear: function() {
        this._items = []
    },
    get total() {
        let total = 0

        for(let i of this._items) {
            total += i.price * i.qty
        }

        return total
    }
}
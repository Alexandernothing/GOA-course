// 6. დაწერე ფუნქცია, რომელიც იღებს id, name და price პარამეტრებს და აბრუნებს ობიექტს

function func(id, name, price) {
    return {
        id,
        name,
        price
    }
}

let gadget = func(5, "PS5", 450)

console.log(gadget)
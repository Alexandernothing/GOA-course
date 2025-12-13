// 3. შექმენით ფუნქცია რომელიც გადაცემულ სტრინგში სიმბოლოებს შეუცვლის ქეისებს. (რომელი ასოც წერია პატარად იმას დიდად დაწერს და პირიქით)

function a(b) {
    let empty = ""
    for(let i = 0;i < b.length;i++) {
        if(b[i] === b[i].toUpperCase()) {
            empty += b[i].toLowerCase()
        }
        else if(b[i] === b[i].toLowerCase()) {
            empty += b[i].toUpperCase()
        }
    }
    return empty
}

console.log(a("hELlO"))
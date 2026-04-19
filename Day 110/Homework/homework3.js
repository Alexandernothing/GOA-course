// 3. შექმენით სია სადაც იქნება სტრინგები. დააბრუნეთ ისეთი სტრინგები რომლებიც ხმოვნით იწყება

let list = ["hello", "Helllo", "apple", "Apple", "CrocodilE", "EGG"]
let vowels = "aeiouAEIOU"
let result = list.filter((i) => {
    return vowels.includes(i[0])
})
console.log(result)
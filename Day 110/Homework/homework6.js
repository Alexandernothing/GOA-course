// 6. შექმენით ცვლადი სადაც შეინახავთ მინიმუმ 20 სიმბოლოიან სტრინგს სადაც იქნება სფეისებიც. გადააქციეთ ეს სტრინგი სიად და დააბრუნეთ პირველივე ხმოვანი რომელ ინდექსზეა.

let letters = "mlop okn hgv tfdxew qwertyui 98ytr rfvbn kjhgf nbhgv cxdswq21    qaszxcfgtr4345678iolmn"
let list = letters.split("")
let vowels = "aeiouAEIOU"

let result = list.findIndex((i) => vowels.includes(i))
console.log(result)
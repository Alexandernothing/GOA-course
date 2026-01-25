// 4. მომხმარებელს შემოატანინეთ რიცხვი. შემდეგ სიტყვები შემოატანინეთ იმდენჯერ რა რიცხვიც შემოიტანა. შემდეგ ახალ სიაში ჩაამატეთ ყველა შემოტანილი სიტყვა. და გაფილტრეთ. თუ იქნება ისეთი სიტყვები რომლებიც მეორდება (ქეის სენსიტიურობა არ გაითვალისწინოს) ისინი ამოშალოს.

let num = Number(prompt("Enter any number: "))
let list = []
let filtered = []

for(let i = 0;i < num;i++) {
    let word = prompt("Enter any word: ").toLowerCase()
    list.push(word)
}
for(let i = 0;i < list.length;i++) {
    let count = 0
    for(let a = 0;a < list.length;a++) {
        if(list[i] == list[a]) {
            count++
        }
    }
    if(count === 1) {
        filtered.push(list[i])
    }
}

console.log(filtered)
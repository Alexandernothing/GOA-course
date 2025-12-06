// 3. მომხმარებელს შემოატანინეთ სიტყვა და ეს სიტყვა გახლიჩეთ სათითაო სიმბოლოდ. და ისე ჩაამატეთ ახალ სიაში.

let userword = prompt("Enter any word: ")
let list = ["Goal", "Oriented", "Academy"]

for(let i = 0;i <= userword.length -1;i++) {
    list.push(userword[i])
}

console.log(list)
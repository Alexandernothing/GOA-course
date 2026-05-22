// 9. შექმენით ორი ობიექტი. პირველ ობიექტში უნდა იყოს id, სახელი, გვარი, დაბადების დღე. მეორე ობიექტში იგივე id, მეილი, პაროლი. ეს ორი ობიექტი გაერთიანეთ.

let info = {
    id: 0,
    name: "Aleqs",
    surname: "Egutia",
    birthDate: "12,08,2005"
}
let acc = {
    id: 0,
    email: "aleqsegutia@gmail.com",
    password: "12345678"
}

console.log(Object.assign(info, acc))
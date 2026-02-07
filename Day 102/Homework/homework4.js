// 4. შექმენით ობიექტი სადაც შეინახავთ თქვენი საყვარელი ფილმის / წიგნის მონაცემებს. და კონსოლში გამოიტანეთ სათითაოდ ჯერ key და შემდეგ value.

let film = {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    imdb: 8.7
}

for (let i in film) {
    console.log(i)
    console.log(film[i])
}
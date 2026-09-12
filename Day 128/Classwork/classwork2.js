/*
    2)შექმენიერთ მრგვალი დივი და შიგნით ჩაწერე ახლანდელი დრო ვითომ საათია ,გამოიყენე setInterval რომელიც ცვლის საათს ყოველ 1000 მილიწამში

    საბოლოო ჯამში უნდა ქონდეს საათის იმიტაცია ვითომ საათია
*/

let header = document.querySelector("h1")

setInterval(() => {
        let date = new Date()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    if(second < 10) {
        second = `0${second}`
    }
    else if(minute < 10) {
        minute = `0${minute}`
    }
    else if(hour < 10) {
        hour = `0${hour}`
    }

    header.textContent = `${hour}:${minute}:${second}`
})
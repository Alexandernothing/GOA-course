/*
11)შექმენით სია სადაც იქნება 10 რანდომ სმაილი

შენი დავალებაა რომ ღლაკზე დაჭერისას საიტზე დაგენერირდეს რენდომ სმაილები ამ სიიდან
*/

let list = ["😉", "😂", "😘", "😡", "🥰", "😭", "😎", "😴", "😵‍💫", "🥹"]
let emoji = document.querySelector("h1")

function generateEmoji() {
    let random = Math.floor(Math.random() * 10)
    emoji.textContent = list[random]
}
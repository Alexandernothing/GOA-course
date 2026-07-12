/*
7)შექმენი:
h1
p
button
append()-ით ჯერ დაამატე h1 და p div-ში.
შემდეგ div და button დაამატე body-ში.
*/

let box = document.createElement("div")
let heading = document.createElement("h1")
let paragraph = document.createElement("p")
let butt = document.createElement("button")
box.append(heading, paragraph)
document.body.append(box, butt)
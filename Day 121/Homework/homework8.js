/*
8)createElement()-ით შექმენი:
div
img
h2
button
img-ზე setAttribute()-ით დაამატე src და alt.
div-ს className-ით მიანიჭე კლასი card.

div-ს setAttribute()-ით დაუმატე:

data-id="1"
append()-ით ყველა ელემენტი ჩასვი div-ში.
div დაამატე body-ში.
*/

let box = document.createElement("div")
let img = document.createElement("img")
let heading = document.createElement("h2")
let button = document.createElement("button")

img.setAttribute("src", "image.jpg")
img.setAttribute("alt", "random")

box.className = "card"
box.setAttribute("data-id", "1")

box.append(img, heading, button)
document.body.append(box)
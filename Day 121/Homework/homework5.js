/*
5)შექმენი button.

setAttribute()-ით დაუმატე:

data-color="red"
 getAttribute()-ით წაიკითხე data-color და გამოიტანე console.log()-ში.
*/

let button = document.createElement("button")
button.setAttribute("data-color", "red")
let get = button.getAttribute("data-color")
console.log(get)
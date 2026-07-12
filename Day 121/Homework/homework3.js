/*
3)დავალება 1
createElement()-ით შექმენი div.
div-ში ჩაწერე ტექსტი "Hello JavaScript".
className-ით მიანიჭე კლასი box.
append()-ით დაამატე body-ში.
*/

let box = document.createElement("div")
box.textContent = "Hello JavaScript"
box.className = "box"
document.body.append(box)
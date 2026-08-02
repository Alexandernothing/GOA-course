// 2. setAttributes და getAttributes -ებს შორის რა განსხვავებაა. სინტაქსიც თქვით და მაგალითიც მოიყვანეთ როგორ გამოიყენებთ.

let img1 = document.getElementById("img_set")
img1.setAttribute("alt", "random img")

let alt = img1.getAttribute("alt")
console.log(alt)
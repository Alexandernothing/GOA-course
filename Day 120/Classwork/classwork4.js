/*
4)შექმენი h1 სადაც შეყვანთ რაიმე ცხოველის სახელს ---> კატა ძაღლი ან ვირი

შენი დავალებაა შეამოწმო თ h1 შიგთავსი არის dog მაშინ ეკრანზე გამოვიდეს შესბამისი ძაღლის ფოტო

თუ შიგთავსი არის კატა გამოიტანოს კატის ფოტო  

სხვა შემთხვევაში ვირის ფოტო ,  გამოიყენე setAtribute getAtribute
*/

let h1 = document.getElementsByTagName("h1")
let imgs = document.getElementsByTagName("img")
let txt = h1.textContent

if(txt === "ძაღლი") {
    imgs.setAttribute("src", "classwork4(dog).jpg")
} 
else if(txt === "კატა") {
    imgs.setAttribute("src", "classwork4(cat).jpg")
} 
else {
    imgs.setAttribute("src", "classwork4(donkey).jpg")
}

console.log(imgs.getAttribute("src"))
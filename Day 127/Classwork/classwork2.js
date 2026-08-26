/*
    2)შექმენი ერთი პარაგრაფი და მასზე დაჭერის შედეგად მისი ფერი შეიცვალოს,მისი უკანა ფერი შეიცვალოს , მისი ზომა შეიცვალოს , 
*/

let para = document.querySelector("p")

para.addEventListener("click", () => {
    let r = Math.floor(Math.random() *266)
    let g = Math.floor(Math.random() *266)
    let b = Math.floor(Math.random() *266)
    let rr = Math.floor(Math.random() *266)
    let gg = Math.floor(Math.random() *266)
    let bb = Math.floor(Math.random() *266)

    let size = Math.floor(Math.random() * 55) + 16

    para.style.color = `rgb(${r}, ${g}, ${b})`
    para.style.backgroundColor = `rgb(${rr}, ${gg}, ${bb})`
    para.style.fontSize = `${size}px`
})
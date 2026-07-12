/*
2. ეიჩტიემელში შექმენით ორი პარაგრაფი რომელიც იქნება მოთავსებული დივში და პირველ პ ში ჩაწერეთ true მეორეში false

თქვენი დავალებაა ჯს ში შექმნათ ცვლადი რომელსაც მიანშებთ true ან false

შემდეგ თქვენი დავალებაა რომ თუ ცვლადში შენახული მნშვნელობა არის true/truthy მაშინ ამოშალოთ მეორე პარაგრაფი დივიდან სხვა შემთხვევაში კი ამოშალეთ პირველი პარაგრაფი დივიდან გამოიყენეთ .remove() მეთოდი ამ დავალების შესასრულებლად
*/

let bool = true
let boxDiv = document.getElementsByClassName("box")[0]
let p1 = document.getElementById("truthy")
let p2 = document.getElementById("falsy")

if(bool = true) {
    p2.remove()
}
else {
    p1.remove()
}
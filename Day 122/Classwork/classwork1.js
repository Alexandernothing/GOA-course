/*
1) შექმენით ცვლადი სადაც წამოიღებთ body ის

შემდეგ შექმენი ერთი დივი რომელსაც ჩაამატებთ ბოდიში

ამ დივს მიეცი სტილები --> ბორდერი წითელი ფერის , სიგანე 400პხ სიმაღლე 400პხ 

====

შექმენი კიდევ ორი დივი და შეინახე განსხვავებულ ცვლადებში მაგ: let red და let blue

ეს ორივე დივი ჩაამატე დივ დივში რაცც ზემოთ წამოიღე

პირველ პატარა დივს მიეცი უკანა ფონის ფერი წითელი , სიმაღლე 100% სიგანე 50%

მეორე პატარა დივს მიეცი უკანა ფონის ფერი ლურჯი , სიმაღლე 100% სიგანე 50%

=======

დიდ დივს სადაც ეს ორი დივი დაამატე ასევე კიდევ დაუმატე სტილი ისე რომ მასში მყოფი ორი ელემენტი განლაგდეს გვერდიგვერდი x ღერძზე(flex)

წითელ დივში დაამატე ერთი პარაგრაფი რომელშიც ეწერება სიტყვა red --> მუქ წითლად

ლურჯ დივში დაამატე ერთი პარაგრაფი რომელშიც ეწერება სიტყვა blue --> მუქ ლურჯად
*/

let body = document.body
let parentDiv = document.createElement("div")
body.appendChild(parentDiv)

parentDiv.style.border = "2px solid red"
parentDiv.style.width = "400px"
parentDiv.style.height = "400px"

let red = document.createElement('div')
let blue = document.createElement('div')

parentDiv.appendChild(red)
parentDiv.appendChild(blue)

red.style.backgroundColor = "red"
red.style.height = "100%"
red.style.width = "50%"

blue.style.backgroundColor = "blue"
blue.style.height = "100%"
blue.style.width = "50%"

parentDiv.style.display = "flex"

let p1 = document.createElement("p")
p1.textContent = "red"
p1.style.color = "darkred"
red.appendChild(p1)

let p2 = document.createElement("p")
p2.textContent = "blue"
p2.style.color = "darkblue"
blue.appendChild(p2)
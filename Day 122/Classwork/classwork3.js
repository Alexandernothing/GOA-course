/*
3)html ში შექმენით ერთი დივი და შიგნით ჩასვი h1 h2 და h3

შენი დავალებაა რომ რომელიმე შვილიდან მიწვდე მშობელს და მისცე ყვითელი ფერის ბორდერი

ასევე მშობლიდან ჩაწვდი სამივე შვილს და მიეცი განსხვავებული ტექსტის ზომა და განსხვავებული ფერი

ასევე ჰ1 ს მიეცი უკანა ფონის ფერი და მიწვდი firstelement ით

ასევე ჰ2 ს მიეცი უკანა ფონის ფერი დამმიწვდი პირველი ელემენტის შემდეგი ელემენტით nextsibling

ასევე h3 ს მიეცი უკანა ფონის ფერი და მიწვდი lastelement ით
*/

let childH1 = document.getElementsByTagName("h1")[0]
let parent = childH1.parentElement
parent.style.border = "3px solid yellow"

let children = parent.children

children[0].style.fontSize = "20px"
children[0].style.color = "cyan"

children[1].style.fontSize = "25px"
children[1].style.color = "purple"

children[2].style.fontSize = "30px"
children[2].style.color = "pink"

let firstChild = parent.firstElementChild
firstChild.style.backgroundColor = "black"

let secondChild = firstChild.nextElementSibling
secondChild.style.backgroundColor = "wheat"

let lastChild = parent.lastElementChild
lastChild.style.backgroundColor = "darkgreen"
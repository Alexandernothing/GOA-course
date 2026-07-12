/*
1. html ში შექმენი ერთ დივი და წამოიღე ჯს ში

შემდეგ შენი დავალებაა რომ ამ დივში ჩაამატო ერთი პარაგრაფი რომლის შიგთავსი იქნება child1

და შემდეგ ჩაამატო ამ დივში სათაური რომლის შიგთავსი იქნება  child2

ქვენს მიერ შექმნილ პარაგრაფს დააამატე კლასი სახელად child1 რომელსაც css ში გასტილავთ მწვანე ფერად

თქვენს მიერ შექმნილ სათაურს დაამატე კლასი სახელად child2 რომელსაც css შიგასტილავთ ყვითელ ფრად
*/

let box = document.querySelector("div")

let para = document.createElement("p")
box.appendChild(para)
para.innerText = "child1"

let head = document.createElement("h1")
box.appendChild(head)
head.innerText = "child2"

para.setAttribute("class", "p")
head.setAttribute("class", "head")
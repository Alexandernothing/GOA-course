/*
1. შექმენით html ში ერთი ღილაკი


ამ ღილაკზე დაჭერის შედეგად --> ფუნქციამ ----> შექმნას ერთი ფოტო რომელსაც დაამატებთ body ში

ასევე შექმნას ერთი სათაური რომელშიც ეწერება hello i am here და ესეც დაამატოს ბოდიში  ასევე ამ სათაურს მიეცით კლასი(js იდან setAtribute)  სახელად --> "red" რომელიც css ში გასტილული გექნებათ შემდეგი სტილებით --> color:"red" , font-size:40პხ; 

ეს ფუნქცია გადაეცით ღილაკს onclick
*/

let but = document.getElementById("bt")
let body = document.body

function create() {
    let image = document.createElement("img")
    image.setAttribute("src", "classwork1.png")
    document.body.append(image)

    let header = document.createElement("h1")
    header.textContent = "hello i am here"
    header.setAttribute("class", "red")
    document.body.append(header)
}
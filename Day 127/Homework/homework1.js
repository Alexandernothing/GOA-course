/*
    1)ააწყვეთ მსგავსი დიზაინის todo app თავისი ფუნქციონალით და დიაზინით , აუცილებლად დაამატეთ აითემების ამოშლის ფუნქციონალიც
*/

let form = document.querySelector("form")
let text = document.getElementById("txt")
let submit = document.getElementById("submt")
let parentBox = document.querySelector(".parentBox")
submit.value = "Add Todo"

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (text.value !== "") {        
        let box = document.createElement("div")
        box.classList.add("children")
        
        let para = document.createElement("p")
        para.textContent = text.value
        box.append(para)

        let button = document.createElement("button")
        button.textContent = "Delete"
        box.append(button)

        button.addEventListener("click", () => {
            box.remove()
        })

        parentBox.append(box)
    }

    form.reset()
})
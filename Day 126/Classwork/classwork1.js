/*
    1)შექმენით ფორმა სადაც გექნებათ 3 ტიპის ინფუთი , ტექსტური , ემაილის და პაროლისტვის ,სამივე ინფუთი ჯს ფაილში

    თქვენი დავალებაა როცა მომცმარებელი დააჭერს რომელიმე ინფუთს ინფუთის ბორდერი გახდეს წითელი  , ასევე დაემატოს ფადინგები 15px ყვეალა მხრიდან ,როცა ინფუთდან გავა მომხმარებელი მაშინ ფორმას გაუჩნდეს ლურჯი ფერის ბორდერი და პადინგები დაბრუნდეს 0px ზე
*/

let inp1 = document.getElementById("i1")
let inp2 = document.getElementById("i2")
let inp3 = document.getElementById("i3")

inp1.onfocus = () => {
    inp1.style.border = "2px solid red"
    inp1.style.padding = "15px"
}

inp2.onfocus = () => {
    inp2.style.border = "2px solid red"
    inp2.style.padding = "15px"
}

inp3.onfocus = () => {
    inp3.style.border = "2px solid red"
    inp3.style.padding = "15px"
}

inp1.onblur = () => {
    inp1.style.border = "2px solid blue"
    inp1.style.padding = "0px"
}

inp2.onblur = () => {
    inp2.style.border = "2px solid blue"
    inp2.style.padding = "0px"
}

inp3.onblur = () => {
    inp3.style.border = "2px solid blue"
    inp3.style.padding = "0px"
}
// 5. შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ ტექსტს შეამოწმებს პალინდრომეა თუ არა (საწყისი ვერსია == შებრუნებული ვერსია)

function reverse(text) {
    let reversed = ""
    for(let i = text.length - 1;i >= 0;i--) {
        reversed += text[i]  
    }
    if(reversed === text) {
        return true
    }
    else{
        return false
    }
}

console.log(reverse("aba"))
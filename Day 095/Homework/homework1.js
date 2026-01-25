// 2. შექმენით ფუნქცია რომელიც შეამოწმებს არგუმენტად გადაცემული მნიშვნელიბა არის თუ არა პალინდრომე.

function palindrome(a) {
    let reversed = ""
    for(let i = a.length - 1;i >= 0; i--){
        reversed += a[i]
    }
    if(a === reversed) {
        return "Argument is palindrome"    
    }
    else{
        return "Argument isn't palindrome"
    }
}

console.log(palindrome("lokingl"))
console.log(palindrome("lol"))
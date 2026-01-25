// 2. შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სტრინგიდან ხმოვნებს ჩაანაცვლებს და მათ მაგივრად *-ს გამიაჩენს.

function vowel(a) {
    b = ""
    for(let i = 0;i < a.length;i++) {
        if(a[i] == "a" || a[i] == "e" || a[i] == "i" || a[i] == "o" || a[i] == "u") {
            b += "*"
        }
        else{
            b += a[i]
        }
    }
    return b
}

console.log(vowel("aleqsandre"))
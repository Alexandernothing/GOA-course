// 2. შექმენით ცვლადი რომლის მნიშვნელობაც იქნება false. შემდეგ მეორე ცვლადში შეინახეთ ეს ცვლადი იმ შემთხვევაში თუ ექნება მნიშვნელობა, სხვა შემთხვევაში თქვენი სახელი. კომენტარის სახით ახსენით რას გამოიტანს და რატომ

let isFalse = false
let maybeFalse = isFalse || "Aleqsandre"

console.log(maybeFalse)
// maybeFalse გამოიტანს "Aleqsandre" ს, რადგან isFalse არის false და "Aleqsandre" არის true, ანუ გამოდის false || true, რომელიც გამოიტანს true ს
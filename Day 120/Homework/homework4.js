// 4. InnerText, innerHtml, textContent შორის რა განსხვავებებია დაწერეთ კომენტარის სახით და მოიყვანეთ მაგალითები.

// innerText აბრუნებს მხოლოდ ისეთ ელემენტებს, რომლებიც ეკრანზე შეგვიძლია ვნახოთ, მაგ:
let div = document.getElementsByTagName("div")[0]
console.log(div.innerText)

//innerHtml აბრუნებს, ან ცვლის კონკრეტულ ელემენტებს, მაგ:
div.innerHTML = "<h1>Hi</h1><p style='display: none;'>hellohi</p>"
console.log(div)

//textContent კი აბრუნებს ელემენტს მიუხდავად იმისა ჩანს თუ არა იგი ეკრანზე, მაგ:
console.log(div.textContent)
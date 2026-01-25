// 13. მომხმარებელმა შეიყვანოს ქულა (0–100). თუ ქულა ≥ 51, გამოცდა ჩაბარებულია, სხვა შემთხვევაში — ჩაჭრილია.

let points = Number(prompt("Enter how many points did you get: "))

if(points > 51) {
    console.log("გამოცდა ჩაბარებულია")
}
else{
    console.log("შენ ჩაიჭერი")
}
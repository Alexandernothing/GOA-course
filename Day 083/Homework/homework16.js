// 16. მომხმარებელს შემოატანინეთ ტემპერატურა, თუ  0-ზე ნაკლებია გამოიტანეთ  "ცივა და თბილად ჩაიცვი", 0-დან 25-ის ჩათვლით თუა 'ნორმალური ამინდია;  სხვა დანარჩენ შემთხვევაში 'ცხელა'

let temperature = Number(prompt("Enter temperature: "))

if(temperature < 0) {
    console.log("ცივა და თბილად ჩაიცვი")
}
else if(temperature > 0 && temperature < 26){
    console.log("ნორმალური ამინდია")
}
else{
    console.log('ცხელა')
}
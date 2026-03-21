// 3. შექმენით ფუნქცია, რომელსაც გადაეცემა ტექსტი. ფუნქციამ უნდა დააბრუნოს ობიექტი სადაც იქნება რამდენი დიდი  და პატარა ასო არის მოცემულ ტექსტში.

function lowerUpper(txt) {
    let obj = {
        lower: 0,
        upper: 0
    }
    for(let i of txt) {
        if(i === i.toLowerCase()) {
            obj.lower++
        }
        else {
            obj.upper++
        }
    }

    return obj
}

console.log(lowerUpper("ATFVBUGpoknbvgGFCFRDSWAsrtgbk"))
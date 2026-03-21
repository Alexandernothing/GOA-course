// 2. შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა ტექსტი. ფუნქციამ უნდა დააბრუნოს ობიექტი, სადაც ცალ-ცალკე დაითვლით რამდენი ხმოვანია და რამდენი თანხმოვანი.

function obj(txt) {
    txt = txt.toLowerCase()

    let object = {
        vowel: 0,
        consonant: 0
    }

    for(let i of txt) {
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            object.vowel++
        }
        else {
            object.consonant++
        }
    }

    return object
}

console.log(obj("qwertyuioplkjhgfdsazxcvbnmmnbvcxsdfghjiuytrew"))
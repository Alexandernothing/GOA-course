// 1. შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა ტექსტი სადაც იქნება როგორც ასოები, ასევე რიცხვები და სხვა დანარჩენი სიმბოლო. ობიექტის სახით დააბრუნეთ ასოები, რიცხვები და სხვა სიმბოლოები რამდენჯერ მეორდება.

function count(text) {
    let object = {
        letter: 0,
        number: 0,
        other: 0
    }
    for(let i of text) {
        if("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".includes(i)) {
            object.letter++
        }
        else if("1234567890".includes(i)) {
            object.number++
        }
        else {
            object.other++
        }
    }
    return object
}

console.log(count("12345tyhnmo09iuyhgfcdsewazxcvbhjkl.;p/'[-[/*bhygvtfcdexsw2qa!@#$%^&*()"))
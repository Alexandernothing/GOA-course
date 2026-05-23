// 16. შექმენით სია სადაც იქნება მინიმუმ 10 სტრინგი. გამოიტანეთ ყველა ისეთი სტრინგი რომლის პირველი სიმბოლოც არის დიდად დაწერილი (upper case)

let list = ["Hello", "world", "GOA", "Programming", "apple", "samsung", "Nokia", "castle", "Jail"]
list.forEach(i => {
    if(i[0] === i[0].toUpperCase()) {
        console.log(i)
    }
})
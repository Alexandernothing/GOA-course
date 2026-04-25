// 1. შექმენით სია სადაც იქნება მინიმუმ 7 სტრინგი. დააბრუნეთ ყველაზე გრძელი სიტყვა.

let words = ["apple", "car", "phone", "moon", "tale", "universe", "hyperactive"];
let longest = words[0]

for(let i = 1;i < words.length;i++) {
  if(words[i].length > longest.length) {
    longest = words[i]
  }
}

console.log(longest)
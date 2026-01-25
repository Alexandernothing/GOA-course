/* 6. Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
Don't forget to rate this kata! Thanks :)
*/

function camelcase(str) {
    let result = ""
    str = " " + str

    for(let i = 0;i < str.length;i++) {
        if(str[i] === " ") {
            result += str[i + 1].toUpperCase()
            i++
        }
        else{
            result += str[i]
        }
    }
    return result
}

console.log(camelcase("test case"))
console.log(camelcase("camel Case method"))
console.log(camelcase("say hello"))
console.log(camelcase("camel case word"))
console.log(camelcase(""))
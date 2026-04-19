// 6. შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად სტრინგი. და ობიექტის სახით დააბრუნეთ თითოეული ასო რამდენჯერ გვხვდება.

function count(str) {
    let result = {}

    for(let i of str) {
        if(result[i] !== undefined) {
            result[i]++
        } 
        else {
            result[i] = 1
        }
    }

    return result
}

console.log(count("pneumonoultramicroscopicsilicovolcanoconiosis"))
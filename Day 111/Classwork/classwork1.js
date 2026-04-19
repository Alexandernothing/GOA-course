/* 1. მოცემულია:

[
  { name: "apple", price: 2 },
  { name: "banana", price: 5 },
  { name: "orange", price: 3 }
]

reduce-ით იპოვე ყველაზე ძვირიანი პროდუქტი (ობიექტი მთლიანად დააბრუნე).
*/

let products = [
  { name: "apple", price: 2 },
  { name: "banana", price: 5 },
  { name: "orange", price: 8 }
]

let result = products.reduce((acc, curr) => {
  if(curr.price > acc.price) {
    return curr
  } 
  else{
    return acc
  }
})

console.log(result)
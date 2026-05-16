// 3. შექმენით ფუნქცია updateProduct, რომელიც იღებს ორ არგუმენტს: id და updates (ობიექტი სადაც იქნება ფასი, წიგნის სახელი, ავტორი, გამოცემის წელი). ფუნქციამ უნდა დააბრუნოს ერთი ახალი ობიექტი სადაც იქნება id და updates-იდან დესტრუქციის საშუალებით ამოიღებთ მხოლოდ წიგნის სახელს. (მხოლოდ id, სახელს აბრუნებთ ობიექტის სახით)

function updateProduct(id, updates) {
  let {name} = updates
  
  return {id, name}
}

let bookUpdates = {
  price: 25,
  name: "The Pickwick Papers",
  author: "Charles Dickens",
  year: 1837
}

let result = updateProduct(101, bookUpdates)

console.log(result)
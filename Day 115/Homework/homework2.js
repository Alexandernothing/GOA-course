// 2. შექმენი ობიექტი, სადაც ერთი მეთოდი იქნება ჩვეულებრივი function, ხოლო მეორე arrow function. ორივეში გამოიყენე this, ნახეთ რომელი იმუშავებს.

let obj = {
    name: "user",
    func1: function() {
        return "hello " + this.name
    },
    func2: () => {
        return "hello " + this.name
    }
}

console.log(obj.func1())
console.log(obj.func2()) 
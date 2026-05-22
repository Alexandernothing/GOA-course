// 1. შექმენი ობიექტი robot, რომელსაც ექნება model და მეთოდი sayModel. გამოიყენე this, რომ მეთოდმა დააბრუნოს "ჩემი სახელია {model}"
const robot = {
  model: "Tesla",
  sayModel: function() {
    return "ჩემი სახელია " + this.model
  }
}

console.log(robot.sayModel())
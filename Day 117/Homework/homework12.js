// 12. შექმენით Factory ფუნქცია createRobot(name), სადაც იქნება _battery და თავიდან იქნება 100-ის ტოლი. ფუნქციამ უნდა დააბრუნოს ობიექტი, რომელსაც ექნება get battery (დააბრუნებს:  "Battery: [battery]%") და მეთოდი work(). work() მეთოდის ყოველ გამოძახებაზე ბატარეას უნდა დააკლდეს 15%. თუ ბატარეა 15-ზე ნაკლებია, მეთოდმა უნდა დაბეჭდოს "დაიტენე!"

function createRobot(name) {
    let _battery = 100 
    return {
        name,
        get battery() {
            return `Battery: ${_battery}%`
        },
        work() {
            if(_battery < 15) {
                console.log("დაიტენე!")
            } 
            else {
                _battery -= 15
            }
        }
    }
}

let myRobot = createRobot("რობი")

console.log(myRobot.battery)

myRobot.work()
myRobot.work()
myRobot.work()
myRobot.work()
myRobot.work()
myRobot.work()
myRobot.work()
/* 1. მომხმარებელს შემოატანინე რიცხვი.
თუ რიცხვი იყოფა 2-ზე და არ იყოფა 5-ზე, კონსოლში დაწერე "რიცხვი ლუწია და არა 5-ის ჯერადი",
სხვა შემთხვევაში "სხვა შემთხვევა" */

let num = Number(prompt("Enter any number: "))

if(num % 2 == 0 && num % 2 != 0) {
    console.log("The number is even and it isn't multiple of five")
}
else{
    print("Another case")
}
/* 2.
let command = prompt("შეიყვანე ბრძანება: start, pause, resume, exit");

if (command === "start") {
    console.log("თამაში დაიწყო");
} 
else if (command === "pause") {
    console.log("თამაში შეჩერებულია");
} 
else if (command === "resume") {
    console.log("თამაში განახლდა");
} 
else if (command === "exit") {
    console.log("თამაში დასრულდა");
} 
else {
    console.log("უცნობი ბრძანება");
}


გადააკეთეთ ეს კოდი switch ად
*/

let command = prompt("შეიყვანე ბრძანება: start, pause, resume, exit")

switch(command) {
    case "start":
        console.log("თამაში დაიწყო")
        break
    case "pause":
        console.log("თამაში შეჩერებულია")
        break
    case "exit":
        console.log("თამაში დასრულდა")
        break
    default:
        console.log("უცნობი ბრძანება")
}
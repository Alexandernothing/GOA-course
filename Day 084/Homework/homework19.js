// 19. მომხმარებელს შემოატანინე პაროლი და შეამოწმე, ტოლია თუ არა "12345"-ს ან "Goa"-ს.

let password = prompt("Enter your password: ")

if(password === "12345" || password === "Goa") {
    console.log("Password is correct")
}
else{
    console.log("Password is incorrect")
}
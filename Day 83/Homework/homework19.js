// 19. მომხმარებელს შემოატანინეთ პაროლი, თუ სწორად შემოიტანა მაშინ შემოატანინეთ სახელი, გვარი, ასაკი. თუ გვარი დაემთხვა თქვენსას მაშინ გამოიტანეთ კონსოლში, თქვენ წარმატებით გაიარეთ რეგისტრაცია. სხვა შემთხვევაში, რეგისტრაციის დროს რაღაც ხარვეზი მოხდა. თუ პაროლი არ დაემთხვევა მაშინ კონსოლში გამოიტანეთ. 'არასწორია პაროლი'

let password1 = "iodufb3finf"
let password2 = prompt("Enter your password: ")

if(password1 == password2) {
    let Name = prompt("Enter your name: ")
    let lastname = prompt("Enter your lastname: ")
    let age = Number(prompt("Enter your age: "))
    let mylastname = "Egutia"

    if(lastname == mylastname) {
        console.log("Registration was successful")
    }
    else{
        console.log("There was an error during registration")
    }
}
else{
    console.log("Password is incorrect")
}
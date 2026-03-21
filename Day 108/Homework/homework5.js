// 5. შექმენით ფუნქცია, რომელსაც გადაეცემა ტექსტი სადაც იქნება რიცხვებიც შერეული. დათვალეთ რამდენი ლუწი ციფრია მოცემულ სტრინგში (ternary operator)

function even(a) {
    let count = 0

    for (let i of a) {
        i + Number(i) === Number(i) + Number(i) ? (Number(i) % 2 === 0 ? count++ : null) : null
    }

    return count
}

console.log(even("iub122"))

// ?
// 5. შექმენით ფუნქცია, რომელსაც გადაეცემა ტექსტი სადაც იქნება რიცხვებიც შერეული. დათვალეთ რამდენი ლუწი ციფრია მოცემულ სტრინგში (ternary operator)

function even(a) {
    let count = 0

    for (let i of a) {
        Number(i) % 2 === 0 ? count++ : count += 0
    }

    return count
}

console.log(even("Hellohiim87654myfsvode5432456"))
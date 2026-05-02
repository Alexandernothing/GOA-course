/*
1)გაქვს ობიექტი user

მოთხოვნები:

_age იყოს private property

setter არ უნდა აძლევდეს უარყოფით მნიშვნელობას(შეამოწმე თუ უატყოფითა არ შეცვალო თუ დადებითია შეცვალე ახალი მნშვნელპბით)

getter აბრუნებდეს ასაკს

თუ არასწორი მნიშვნელობაა → console.log("არასწორი ასაკი")
*/

const user = {
    _age: 0, 
    set age(newAge) {
        if(newAge >= 0) {
            this._age = newAge
        } 
        else {
            console.log("არასწორი ასაკი")
        }
    },
    get age() {
        return this._age
    }
}

user.age = 10
console.log(user.age)
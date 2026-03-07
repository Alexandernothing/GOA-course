/* 1.
შექმენი ცვლადი month (1–12).

switch-ით გააკეთე:

1 → "იანვარი - ზამთარი"

2 → "თებერვალი - ზამთარი"

3 → "მარტი - გაზაფხული"

4 → "აპრილი - გაზაფხული"

5 → "მაისი - გაზაფხული"

6 → "ივნისი - ზაფხული"

7 → "ივლისი - ზაფხული"

8 → "აგვისტო - ზაფხული"

9 → "სექტემბერი - შემოდგომა"

10 → "ოქტომბერი - შემოდგომა"

11 → "ნოემბერი - შემოდგომა"

12 → "დეკემბერი - ზამთარი"

თუ 1–12 არ არის → "არასწორი თვე"
*/

let month = Number(prompt("Enter month number 1-12:"))

switch(month) {
    case 1:
        console.log("Winter")
        break
    case 2:
        console.log("Winter")
        break
    case 3:
        console.log("Spring")
        break
    case 4:
        console.log("Spring")
        break
    case 5: 
        console.log("Spring")
        break
    case 6: 
        console.log("Summer")
        break
    case 7: 
        console.log("Summer")
        break
    case 8: 
        console.log("Summer")
        break
    case 9: 
        console.log("Autumn")
        break
    case 10: 
        console.log("Autumn")
        break
    case 11: 
        console.log("Autumn")
        break
    case 12: 
        console.log("Winter")
        break
    default:
        console.log("Incorrect month")
}
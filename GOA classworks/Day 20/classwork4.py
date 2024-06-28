num = int(input("Enter any whole number: "))  #აქ მომხარებელს ვატანინებთ რიცხვსnum1 = int(input("Enter any intenger number, but bigger then previous one: "))   #აქ მომხმარებელს ვატანინებთ მეორე რიცხვს
num1 = int(input("Enter any whole number, but bigger then previous one: "))  #აქ მომხმარებელს ვატანინებთ მეორე რიცხვს
multiple = 1   #ან ვქმნით ნამრავლს
for i in range(num, num1):   #აქ ვწერთ num დან num1 ის ჩათვლით რიცხვებს
    multiple = multiple * i  #აქ ვწერთ მომხმარებლის მიერ ორი რიხცვების შორის ნამრავლს
    print(multiple)   #ხოლო აქ კი ნამრავლს გამოვსახავთ ეკრანზე
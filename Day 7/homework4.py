number = int(input("Enter any number: "))

if number % 9 == 0 and number > 100:
    print("the number is the multiple of nine and also the number is > then 100")
elif number % 9 == 0 and number < 100:
    print("the number is multiple of nine, but it is < then 100")
elif number % 9 != 0 and number > 100:
    print("the number is not the multiple of nine, but it is > then 100")
elif number % 9 != 0 and number < 100:
    print("the number is not the multiple of nine and also, it is < then 100")
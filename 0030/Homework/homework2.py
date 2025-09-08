def positive_or_negative():
    num = int(input("Enter any number: "))
    if num > 0:
        print(num, "is positive")
    elif num == 0:
        print(num, "is neutral")
    else:
        print(num, "is negative")

positive_or_negative()
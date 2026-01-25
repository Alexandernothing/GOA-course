def odd_or_even():
    num = int(input("Enter any number to test if it's odd or even: "))
    if num % 2 == 0:
        print(num, "is even")
    else:
        print(num, "is odd")

odd_or_even()
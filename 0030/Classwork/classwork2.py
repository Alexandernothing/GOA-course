def user_input():
    num = int(input("Enter any number: "))
    if num > 10:
        print(num, "> 10")
    elif num == 10:
        print(num, "= 10")
    else:
        print(num, "< 10")

user_input()
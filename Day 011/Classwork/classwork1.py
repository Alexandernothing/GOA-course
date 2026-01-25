num1 = int(input("Enter any number: "))
num2 = int(input("Enter second number: "))
num3 = int(input("Enter third number: "))

opperation = input("Please enter + or - or * or /")

if opperation == "+":
    print(num1 + num2 + num3)
elif opperation == "-":
    print(num1 - num2 - num3)
elif opperation == "*":
    print(num1 * num2 * num3)
elif opperation == "/":
    print(num1 / num2 / num3)
else:
    print("your opperation went wrong")
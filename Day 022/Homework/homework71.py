def checkren(lower, num, upper):
    if lower <= num <= upper:
        return True
    else:
        return False

number = 10
lower_li = 5
upper_li = 15

if checkren(number, lower_li, upper_li):
    print(number, "is within the range")
else:
    print(number, "is not within the range")
num = int(input("Enter a number to find its factorial: "))

factorial = 1
i = 1

while i <= num:
    factorial *= i
    i += 1

print(factorial)
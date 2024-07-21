numbers = [10, 15, 85, 73, 21]

for num in numbers:
    if num % 2 == 0:
        print(num)
        break
else:
    print("There is no even number")
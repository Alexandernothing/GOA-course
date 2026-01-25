def numbers():
    nums = []
    
    for i in range(10):
        while True:
            try:
                num = float(input("Enter any number: "))
                nums.append(num)
                break
            except ValueError:
                print("Enter valid number")
    
    for num in nums:
        square = num ** 2
        print(num, "is in square of", square)

numbers()
num = int(input("Enter a number to reverse: "))

reversed_num = 0
number = num

while num > 0:
    remainder = num % 10        
    reversed_num = reversed_num * 10 + remainder  
    num = num // 10 
    print(reversed_num)
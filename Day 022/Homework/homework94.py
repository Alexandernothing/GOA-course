def sum(num):
    if num < 0:
        num = - num
    
    sum_digits = 0
    
    while num > 0:
        sum_digits += num % 10

        num //= 10
    
    return sum_digits

num = -2468
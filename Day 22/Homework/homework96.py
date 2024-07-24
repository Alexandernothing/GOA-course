def fibonacci_up_to(max_num):
    a, b = 0, 1
    
    print(a, end=" ")
    
    while b <= max_num:
        print(b, end=" ")
        a, b = b, a + b


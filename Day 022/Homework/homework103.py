def fibonacci_up_to(max_num):
    a, b = 0, 1
    
    print(a, end=" ")
    
    for _ in range(max_num):
        if b > max_num:
            break
        print(b, end=" ")
        a, b = b, a + b
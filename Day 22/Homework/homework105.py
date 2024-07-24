def find_max_min(numbers):
    if not numbers:
        return None, None  
    
    max_value = numbers[0]
    min_value = numbers[0]
    
    for num in numbers:
        if num > max_value:
            max_value = num
        if num < min_value:
            min_value = num
    
    return max_value, min_value


num_list = [7, 2, 9, 1, 5, 3]
max_num, min_num = find_max_min(num_list)
print(f"The maximum value in the list is: {max_num}")
print(f"The minimum value in the list is: {min_num}")
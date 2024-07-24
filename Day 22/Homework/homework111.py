def find_largest_number(numbers):
    if not numbers:
        return None
    
    largest = numbers[0]
    
    for num in numbers:
        if num > largest:
            largest = num
    
    return largest
def is_palindrome(input_string):
    input_string = input_string.replace(" ", "").lower()
    
    return input_string == input_string[::-1]
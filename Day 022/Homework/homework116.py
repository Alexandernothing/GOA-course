def count_vowels(input_string):
    vowels = set("aeiouAEIOU")
    
    vowel_count = 0
    
    for char in input_string:
        if char in vowels:
            vowel_count += 1
    
    return vowel_count

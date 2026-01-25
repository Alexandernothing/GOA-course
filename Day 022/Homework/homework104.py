def print_dict_items(dictionary):
    for key, value in dictionary.items():
        print("Key:", key, "Value:", value)

# Example usage:
my_dict = {
    'apple': 5,
    'banana': 3,
    'cherry': 7,
    'date': 2
}

print("Printing key-value pairs of the dictionary:")
print_dict_items(my_dict)
guess_num = input("Guess the number from 1 to 20: ")
if guess_num == 14:
    print("Correct")
elif guess_num == 12 or 13 or 15 or 16:
    print("Wrong, but close")
else:
    print("Wronge")
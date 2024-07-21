num = 60

while True:
    number = input("guess the number: ")

    if number == num:
        print("Correct! You guessed it")
        break
    else:
        print("Incorrect")
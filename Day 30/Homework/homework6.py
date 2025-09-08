def check_password():
    while True:
        password = input("Please enter password: ")
        if len(password) >= 8:
            print("Registration was successful")
            break
        else:
            print("Password must have minimum 8 symbol. Please, try again")

check_password()
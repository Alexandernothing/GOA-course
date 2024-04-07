ticket_price = 10
tickets_to_buy = int(input("How many tickets do you want?: "))

if tickets_to_buy < 5:
    print("That'll be", ticket_price * tickets_to_buy )
else:
    print("That'll be", (ticket_price - ticket_price * 30 / 100) * tickets_to_buy )
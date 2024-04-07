item_to_buy = int(input("How much does your item to buy cost?: "))
budget = int(input("Enter your budget: "))

if budget >= item_to_buy:
    print("You have enough money to buy this item: ")
else:
    print("You need", item_to_buy - budget, "more")
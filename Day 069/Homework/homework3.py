# 3. შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია. თქვენი მიზანია ამ სიის თითოეული რიცხვი გაასტრინგოთ და შეაერთოთ ისე რომ მათ შორის '@' იყოს.  ( join & split გამოიყენეთ )
def join_split(list):
    new = []

    for i in list:
        new.append(str(i))
    
    final_result = "@".join(new)
    print(final_result)

join_split([1, 2, 3, 4, 5, 6, 7, 8, 9])
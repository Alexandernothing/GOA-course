# 1) შექმენით ფუნქცია რომელსაც გადაეცემა გრძელი წინადადება. ამ წინადადებაში სიტყვების პირველი ასოები დიდად გადააქციეთ და შეაერთეთ ისევ.

def func(long_sentence):
    a = long_sentence.split(" ")
    result = []
    for i in a:
        result.append(i.capitalize())
    print("".join(result))

print(func("what a nice day is not it"))
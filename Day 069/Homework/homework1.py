# 1. მომხმარებელს შემოატანინეთ სიტყვა. ამ სიტყვაშუ სადაც იქნება “g” ასო იმ ადგილებში გასპლიტეთ და დიდი “G”-თი გაერთიანეთ.

def function(word):
    a = word.split("g")
    print("G".join(a))

function("abcdefgabcgwueg")
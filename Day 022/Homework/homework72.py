li1 = [1, 2, 3]
li2 = [1, 2, 3]
if li1 is li2:
    print(li1, "is", li2)
else:
    print(li1, "is not", li2)

"""ჩვენ შეგვიძლია ეს მეორე ნაირადაც გავაკეთოთ""" 

li1 = [1, 2, 3]
li2 = [4, 5, 6]
if li1 is not li2:
    print(li1, "is not", li2)
else:
    print(li1, "is", li2)
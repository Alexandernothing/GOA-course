# 1) შექმენით ფუნქცია,რომელსაც გადაეცემა ერთ დიდი წინადადება და ამ წინადადებაში სიტყვები დაშორებულები არიან  $ ნიშნით,თქვენი დავალებაა დააბრუნოთ სია სადაც მოთავსებული იქნება თითოეული სიტყვა ამ სტრინგიდან.

sentence = "Hello$my$name$is$Aleqsandre"
list = sentence.split("$")
print(list)
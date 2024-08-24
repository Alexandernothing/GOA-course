x = ((True and False) or (False or False))   # x = (((true or false) = false) or ((false or false) = false)) = false     x = false or false = false
y = ((False or True) and (False and True))   # y = (((false or true) = true) and ((false and true) = false)) = false     y = true and false = false
print((x and y) or True)            # (((x and y) = false) or true) = true      print(true)
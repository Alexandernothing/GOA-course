a = 5
print(a < 10 and a > 2)
print(a * 3 == 20 and a / 2 == 2)
print(a == 5 and a != 5)

y = 30
print(y % 2 == 0 or y == 30)
print(y != 30 or y % 2 == 1)
print(y == 30 or y / 2 == 14)

x = 10
print(not(x == 10 and x / 2 == 5))
print(not(x != 10 and x * 10 == 1000))
print(not(x + 10 == 20 and x // 5 == 3))
print(not(x == 10 * 1 or x == 5 + 10 - 5))
print(not(x == 10000 / 20 or x - 5 == 5))
print(not(x % 2 == 3 or x * 2 == 20))
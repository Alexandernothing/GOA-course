nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums_doubled = []

while len(nums) > 0:
    num = nums.pop()
    nums_doubled.append(num * 2)
    print(nums_doubled)
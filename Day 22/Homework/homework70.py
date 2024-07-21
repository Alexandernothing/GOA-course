num1 = 0b1010  
num2 = 0b1100  
result_and = num1 & num2
print(f"Bitwise AND: {bin(num1)} & {bin(num2)} = {bin(result_and)} ({result_and})")


result_or = num1 | num2
print(f"Bitwise OR:  {bin(num1)} | {bin(num2)} = {bin(result_or)} ({result_or})")

result_xor = num1 ^ num2
print(f"Bitwise XOR: {bin(num1)} ^ {bin(num2)} = {bin(result_xor)} ({result_xor})")

result_not_num1 = ~num1
print(f"Bitwise NOT (~{bin(num1)}) = {bin(result_not_num1)} ({result_not_num1})")

num3 = 10
shift_left = num3 << 2  
print(f"Bitwise Left Shift ({num3} << 2) = {shift_left} ({bin(shift_left)})")

num4 = 40
shift_right = num4 >> 3 
print(f"Bitwise Right Shift ({num4} >> 3) = {shift_right} ({bin(shift_right)})")
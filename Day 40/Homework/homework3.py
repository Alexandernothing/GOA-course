# 4) https://www.codewars.com/kata/50654ddff44f800200000004/train/python და https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/python/ ახსენით vccode ში პასუხები

# 1) 👉👉
#       👇
def multiply(a, b):
    a * b          #ეს არის არასწორი და ეხლა ჩვენ უნდა გავასწოროთ

def multiply(a, b):
    return a * b   #ეს იქნება სწორი, რადგან return ის გარეშე ვერ გავაკეთებთ რადგან რათქმაუნდა რომ გამოისახოს a * b უნდა დავაბრუნოთ იგი


# 2) 👉👉
#       👇
def even_or_odd(number):
    pass        #number ის შემოყვანის დროს ჩვენმა ფუნქციამ უნდა გაიგოს ლუწია(Even), თუ კენტი(Odd)

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"   #ამ კოდით დავწერე, რომ თუ შემოყვანილი რიცხვი(number) ნაშთიანი გაყოფით 2 ზე ნაშთი 0 იქნება, მაშინ იგი იქნება ლუწი, რადგან ვიცით, რომ თუ რიხცვი უნაშთოდ იყოფა 2 ზე, მაშინ იგი ლუწია
    else:
        return "Odd"  #აქ დავწერე, რომ თუ ნაშთი 0 არ იქნებოდა, მაშინ დაეწერა Odd(კენტი)
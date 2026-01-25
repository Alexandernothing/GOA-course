// 3. შექმენით ობიექტი საიდანაც ამოშლით რომელიმე ორ მნიშვბელობას და ერთს გაანახლებთ.

let nums = {
    num1: 1,
    num2: 2,
    num3: 90,
    num4: 96,
    num5: 3,
    num6: 4,
    num7: 55
}

delete nums.num3
delete nums.num4
nums.num7 = 5

console.log(nums)
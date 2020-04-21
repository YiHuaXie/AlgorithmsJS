/**
 * 
 * 题目地址：https://leetcode-cn.com/problems/sum-of-two-integers/
 * 
 * 解题思路：
 * 
 * 加法可以通过&运算和^运算实现：
 * 
 * 1. 两个二进制数相加，^运算的结果是不考虑进位时的结果
 * 2. 两个二进制数相加，&运算的结果是对应为是否有进位，如果结果出现1的话，则左移（<<）1位后和^运算的结果继续做加法，直到&运算的结果为0，此时&运算的结果就是两个数的和
 * 
 * 时间复杂度：
 * 
 * 空间复杂度：
 */
const lc_getSum = (a, b) => {
    return add(a, b)
}

const add = (a, b) => {
    // 递归
    return b === 0 ? a : add(a ^ b, (a & b) << 1)
    // // 迭代
    // while(b) {
    //     const temp = a ^ b
    //     b = (a & b) << 1
    //     a = temp
    // }

    // return a
}

export const lc_getSumTest = () => {
    console.log(lc_getSum(1, 3))
    console.log(lc_getSum(1, -3))
    console.log(lc_getSum(-1, -3))
}
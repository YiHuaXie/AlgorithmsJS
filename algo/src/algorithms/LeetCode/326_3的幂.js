/***
 * 题目地址：https://leetcode-cn.com/problems/power-of-three/
 * 
 * 解题思路：
 * 如果3^x=n，x = log3(n)。两边同时取常用对数 x = log10(n) / log10(3)
 * 
 * 时间复杂度：Unknown，这里主要消耗时间的运算是Math.log
 * 
 * 空间复杂度：O(1)
 */
const lc_isPowerOfThree = n => {
    const power = Math.log10(n) / Math.log10(3)
    return Number.isInteger(power)
}

export const lc_isPowerOfThreeTest = () => {
    console.log(lc_isPowerOfThree(37))
    console.log(lc_isPowerOfThree(27))
}
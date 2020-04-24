/**
 * 题目地址：https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 * 
 * 解题思路：最大的n位十进制数即10^n - 1。10^n可以用快速幂的方式去获取
 * 
 * 时间复杂度：
 * 
 * 空间复杂度：
 */

/**
 * @param {Number} n 
 */
const jz_printNumbers = n => {
    let base = 10, sum = 1, res = []

    while (n !== 0) {
        if ((n & 1) === 1) sum *= base
        
        n >>= 1
        base *= base
    }

    let i = 1
    while (i < sum) res.push(i++)

    return res
}

export const jz_printNumbersTest = () => {
    console.log(jz_printNumbers(3))
}
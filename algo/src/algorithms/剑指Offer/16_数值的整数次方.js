
/**
 * 题目地址：https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
 * 
 * 解题思路：
 * 
 * 解法1（递归实现）
 * 
 * 可以使用二分法进行推导：
 * x ^ n = x ^ (n / 2) * x ^ (n / 2)，这里要考虑n是奇数还是偶数，如果是奇数需要多乘一次x。
 * 在数学上，n >> 1 和 n / 2的结果是相等的，但是效率要高很多。
 * 
 * 时间复杂度：O(logN)
 * 
 * 空间复杂度：O(1)
 */

const jz_myPow1 = (x, n) => {
    if (n === 0) return 1

    if (n === 1) return x

    if (n < 0) { n = -n; x = 1 / x }

    let result = jz_myPow1(x, n >>> 1)
    result *= result

    return (n & 1) === 0 ? result : result * x
}

const jz_myPow2 = (x, n) => {
    if (n === 0) return 1

    if (n === 1) return x

    if (n < 0) { n = -n; x = 1 / x }

    let result = 1

    while (n) {
        if ((n & 1) === 1) result *= x
        x *= x
        n >>>= 1
    }

    return result
}

export const jz_myPowTest = () => {
    console.log(jz_myPow1(3, 4))
    console.log(jz_myPow2(-2, -4))
}
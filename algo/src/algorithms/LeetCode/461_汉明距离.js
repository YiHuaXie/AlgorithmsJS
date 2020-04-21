
/**
 * 题目地址：https://leetcode-cn.com/problems/hamming-distance/
 * 
 * 解题思路：参照剑指Offer面试题15
 * 
 * 解法1：左移运算
 * 通过左移运算获取每一位的值，进行比较，如果x&flag或y & flag有值，且两者不相等，count加1
 * 
 * 时间复杂度：O(N)，N为整数的内存大小
 * 空间复杂度：O(1)
 * 
 * 解法2：异或运算+二进制中1的个数
 * 
 * 根据异或运算的规则，x^y的值里面的1代表不同位，有多少个1即有多少个不同位。只要求出异或值中1的个数即可
 * 
 * 时间复杂度：O(N)，N为异或值中的1的个数
 * 空间复杂度：O(1)
 */
const lc_hammingDistance1 = (x, y) => {
    let count = 0, flag = 1

    while (flag) {
        const xBit = x & flag, yBit = y & flag
        if ((xBit || yBit) && xBit !== yBit) count++

        flag = flag << 1
    }

    return count

}

const lc_hammingDistance2 = (x, y) => {
    let xOry = x^y
    let count = 0

    while (xOry) {
        count++
        xOry = (xOry - 1) & xOry
    }

    return count
}

export const lc_hammingDistanceTest = () => {
    console.log(lc_hammingDistance1(1, 4))
    console.log(lc_hammingDistance2(6, 4))
}
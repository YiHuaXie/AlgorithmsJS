/**
 * 题目地址：https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
 * 
 * 解题思路1：
 * 首先将n和1（0000 0001）做与运算（&），可以得到最低位是否为1，接着把1左移一位得到（0000 0010），再和n做运算，可以得到次低位是否为1。
 * 这样反复左移就可以得到n对应的二进制中1的个数。
 * 
 * 左移的次数取决于n的的大小，如果是32位（4字节）的整数，就需要循环32次。
 * 
 * 时间复杂度：O(N)，N为整数的内存大小
 * 空间复杂度：O(1)
 * 
 * 解题思路2：
 * 
 * 通过整数-1再和原整数做与运算，会把该整数最右边的1变成0。
 * 这样原整数对应的二进制就会少了一个1，当原整数的二进制值中所有的1均变成0，循环结束。
 * 
 * 时间复杂度：O(N)，N为二进制数字中1的个数。
 * 空间复杂度：O(1)
 */
/**
 * @param {Number} n 
 * @return {Number}
 */
const jz_hammingWeight1 = n => {
    let count = 0, flag = 1

    while (flag) {
        if (n & flag) count++

        flag = flag << 1
    }

    return count
}

const jz_hammingWeight2 = n => {
    let count = 0

    while (n) {
        count++
        n = (n - 1) & n
    }

    return count
}

export const jz_hammingWeightTest = () => {
    console.log(jz_hammingWeight1(-1))
    console.log(jz_hammingWeight1(-2))

    console.log(jz_hammingWeight2(-1))
    console.log(jz_hammingWeight2(-2))
    console.log(jz_hammingWeight2(3))
    console.log(jz_hammingWeight2(4))
}
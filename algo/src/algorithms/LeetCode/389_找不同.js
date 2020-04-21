
/**
 * 题目地址：https://leetcode-cn.com/problems/find-the-difference/
 * 
 * 解题思路：使用异或运算
 * 
 * 异或运算关系：
 * 1. a⊕0 = a
 * 2. a⊕a = 0
 * 3. a⊕b = c，这个c是什么我们不需要关心，但只要记得 c⊕a=b, c⊕b=a就可以
 * 
 * 以s="abcd", t= "eabcd"为例，
 * 我不需要知道 a^b^c^d的结果是什么，只要知道a^b^c^d^a = b^c^d。以此类推
 * a^b^c^d^e^a^b^c^d^ = e
 * 
 * js中字符不能直接异或运算，需要转成对应的ascii码
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

/**
 * @param {string} s 
 * @param {string} t 
 * @return {string}
 */
const lc_findTheDifference = (s, t) => {
    let res = t.charCodeAt(t.length - 1)
    for (let i = 0; i < s.length; i++) {
        res ^= s.charCodeAt(i)
        res ^= t.charCodeAt(i)
    }

    return String.fromCharCode(res)
}

export const lc_findTheDifferenceTest = () => {
    console.log(lc_findTheDifference("abcd", "eabcd"))
}
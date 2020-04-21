
/**
 * 题目地址：https://leetcode-cn.com/problems/single-number/
 * 
 * 解题思路：异或运算，详见leetCode389
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const lc_singleNumber = nums => {
    if (!nums || !nums.length) return null

    let res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        res ^= nums[i]
    }

    return res
}

export const lc_singleNumberTest = () => {
    console.log(lc_singleNumber([1, 1, 2, 3, 3]))
    console.log(lc_singleNumber([1, 1, 2, 2, 3]))
}
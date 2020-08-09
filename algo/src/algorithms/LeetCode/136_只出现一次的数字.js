
/** 
 * 题目地址：https://leetcode-cn.com/problems/single-number/ 
 */

/**
 * 解法1：异或运算，详见leetCode389
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

/**
 * 解法2：使用HashSet/HashMap，元素第一次出现则添加进集合，元素第二次出现则从集合删除，
 * 最后剩下的元素就是只出现一次的元素
 * 
 */
const lc_singleNumber2 = nums => {
    if (!nums || !nums.length) return null

    let set = new Set()
    for (const index in nums) {
        let num = nums[index]
        if (set.has(num)) {
            set.delete(num)
        } else {
            set.add(num)
        }
    }
    
    let array = Array.from(set)
    return array[0]
}

export const lc_singleNumberTest = () => {
    console.log(lc_singleNumber([1, 1, 2, 3, 3]))
    console.log(lc_singleNumber([1, 1, 2, 2, 3]))
    console.log(lc_singleNumber2([2, 2, 1]))
}

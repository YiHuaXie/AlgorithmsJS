/**
 * 题目地址：https://leetcode-cn.com/problems/contains-duplicate/
 * 
 * 解题思路：使用哈希集合，哈希集合的元素都是不重复的
 * 
 * 时间复杂度：O(N), N为数组长度
 * 空间复杂度：O(M)，M为哈希集合的长度（非重复元素的集合）
 */
const lc_containsDuplicate = nums => {
    if (!nums || !nums.length) return false
    let set = new Set()
    for (const index in nums) {
        if (set.has(nums[index])) return true
        set.add(nums[index])
    }

    return false

    // // 可以简化成下面的实现
    // const set = new Set(nums)
    // return set.size !== nums.length
}

export const lc_containsDuplicateTest = () => {
    console.log(lc_containsDuplicate([1, 2, 3, 1]))
}
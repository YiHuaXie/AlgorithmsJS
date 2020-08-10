/**
 * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * 
 * 解法：哈希集合，插入和查找都是O(1)
 * 
 * 时间复杂度：O(N)，N是num2的长度
 * 空间复杂度：O(M)，M是num1的长度
 * 
 * @param {*} nums1 
 * @param {*} nums2 
 */
const lc_intersection = (nums1, nums2) => {
    let set1 = new Set(nums1), result = new Set()
    for (const num of nums2) {
        if (set1.has(num)) result.add(num)
    }

    return [...result]
}
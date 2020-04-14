
/**
 * 题目地址：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 * 
 * 解题思路：二分查找+双指针
 * 
 * 旋转后的数组相当于两个排序数组，最小元素为两个元素的分界线。创建指针p1指向数组第0个元素，指针p2指针指向末尾元素。
 * 
 * 在预期情况下：nums[p1] >= nums[p2]
 * 
 * 尝试找到数组的中间元素（mid），如果nums[mid]位于前递增数组中，那么nums[mid]>=nums[p1]。此时最小元素应该在mid的右边，我们将p1指向mid。
 * 如果nums[mid]位于后递增数组中，那么nums[mid]<=nums[p2]。此时最小元素应该在mid的左边，将p2指向mid
 * 
 * 经过一系列循环后，p1最终指向前递增数组的末尾元素（最大），p2最终指向后递增数组的第0位（最小），此时它们的位置肯定是相邻的。这也是循环结束的条件。
 * 
 * 特殊情况1：
 * 如果将排序数组的前0个元素搬到最后面，得到的就是排序数组本身，依然符合数组的旋转。此时nums[p1] < nums[p2]，直接返回nums[p1]即可。
 * 
 * 特殊情况2：
 * nums[mid]，nums[p1]，nums[p2]相等的时候，无法移动指针来缩小查找范围，这时候，只能采用顺序查找
 * 
 * 时间复杂度：O(logN)，在特定情况下退化成O(N)
 * 空间复杂度：O(1)
 * 
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
const jz_minNumInRotateArray = nums => {
    if (!nums || !nums.length) { return null }

    let p1 = 0, p2 = nums.length - 1, mid = p1

    // 不满足循环条件即特殊情况1，直接返回nums[p1]
    while (nums[p1] >= nums[p2]) {
        if (p2 - p1 === 1) { return nums[p2] }

        let mid = parseInt((p1 + p2) / 2)

        // 特殊情况2：使用顺序查找
        if (nums[p1] === nums[p2] && nums[p1] === nums[mid]) {
            return minNumInOrder(nums, p1, p2)
        }

        if (nums[mid] >= nums[p1]) { p1 = mid }
        else if (nums[mid] <= nums[p2]) { p2 = mid }
    }

    return nums[mid]
}

const minNumInOrder = (nums, p1, p2) => {
    let min = nums[p1]
    for (let i = p1 + 1; i < p2; i++) {
        if (min > nums[i]) { min = nums[i] }
    }

    return min
}

export const jz_minNumInRotateArrayTest = () => {
    console.log(jz_minNumInRotateArray([3, 4, 5, 1, 2]))
    console.log(jz_minNumInRotateArray([0, 1, 3, 4, 5]))
    console.log(jz_minNumInRotateArray([1, 0, 1, 1, 1, 1]))
    console.log(jz_minNumInRotateArray([1, 1, 1, 1, 0, 1]))
}
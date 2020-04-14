/**
 * 题目地址：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * 
 * 解法1：Hash表
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * 解法2：重排数组
 * 
 * 长度为n的数组nums里的所有数字都在0～n-1的范围内，在重排后，如果没有重复的数字
 * 那么数字i应该出现在数组下标i的位置中。
 * 
 * 具体重排步骤：
 * 1. 扫描到下标i的值数字（m），若相等则扫描下一个元素;
 * 2. 判断m与nums[m]是否相等，若相等，则说明是重复元素，否则交换nums[i]与nums[m]的值。重复执行第2步直到nums[i]=== i
 * 
 * 时间复杂度：O(n)，虽然是有双重循环，但是最多调整n-1次就可以完成数组重排
 * 空间复杂度：O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const jz_findRepeatNumber = nums => {
    // let result = []
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i) {
            const m = nums[i]
            if (m === nums[m]) {
                // result.push(m)
                // break

                return m
            } else {
                nums[i] = nums[m]
                nums[m] = m
            }
            console.log(`下标：${i}，nums：${nums}`)
        }
    }

    // return result
    return -1
}

export const jz_findRepeatNumberTest = () => {

    const nums = [2, 3, 1, 0, 2, 5, 3]
    console.log(jz_findRepeatNumber(nums))

    const nums2 = [2, 3, 1, 0, 2, 5, 3, 4]
    console.log(jz_findRepeatNumber(nums2))

    const nums3 = [1, 2, 3, 4, 5, 6, 7, 0]
    console.log(jz_findRepeatNumber(nums3))
}
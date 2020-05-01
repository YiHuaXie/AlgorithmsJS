/**
 * 题目地址：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 * 
 * 解题思路：双指针
 * 
 * left指针指向数组的最左端，如果left指向的元素为奇数，left右移一格，不需要交换元素
 * right指针指向数组的最右端，如果left指向的元素为奇数，right左移一格，不需要交换元素
 * 交换left、right对应的元素
 * 
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 */
const jz_exchange = nums => {
    if (!nums || !nums.length) return nums

    let left = 0, right = nums.length - 1

    while (left < right) {
        if ((nums[left] & 1) === 1) {
            left++
            continue
        }

        if ((nums[right] & 1) === 0) {
            right--
            continue
        }

        swap(nums,left, right)
    }

    return nums
}

const swap = (nums, i, j) => {
    nums[j] = nums[i] ^ nums[j]
    nums[i] = nums[i] ^ nums[j]
    nums[j] = nums[i] ^ nums[j]
}

export const jz_exchangeTest = () => {
    console.log(jz_exchange([1, 2, 3, 4]))
    console.log(jz_exchange([2, 4, 10, 11, 1, 3, 7]))
}
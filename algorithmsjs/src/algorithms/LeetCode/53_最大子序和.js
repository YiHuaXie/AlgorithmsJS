/**
 * 题目地址：https://leetcode-cn.com/problems/maximum-subarray/
 */

/**
 * 解题思路：Kadane算法 
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

const lc_maxSubArray1 = nums => {
    if (nums.length < 1) { return 0; }

    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }

        maxSum = Math.max(nums[i], maxSum);
    }

    return maxSum
}

export const lc_maxSubArrayTest = () => {
    console.log(lc_maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
}
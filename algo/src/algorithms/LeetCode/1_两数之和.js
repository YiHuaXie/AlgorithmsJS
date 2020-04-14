
/**
 * 题目地址：https://leetcode-cn.com/problems/two-sum/
 * 
 * 解题思路：
 * 在进行迭代并将元素插入到表中的同时，我们还会回过头来检查表中
 * 是否已经存在当前元素所对应的目标元素。如果它存在，那我们已经
 * 找到了对应解，并立即将其返回。
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

const lc_twoSum = (nums, target) => {
    let dict = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (dict.has(target - nums[i])) {
            const n = dict.get(target - nums[i]);
            if (n < i) { return [n, i]; }
        }

        dict.set(nums[i], i);
    }

    return null;
}

export const lc_twoSumTest = () => {
    let result = lc_twoSum([2, 7, 11, 15], 9);
    console.log(result);
}
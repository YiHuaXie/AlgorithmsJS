/**
 * 题目地址：https://leetcode-cn.com/problems/3sum/
 * 
 * 解题思路：
 * 1. 数组遍历
 * 2. 首先对数组进行排序，排序后固定一个数nums[i]，再使用左右指针指向nums[i]后面的两端，
 *    数字分别为nums[L]和nums[R]，计算三个数的和sum判断是否满足为0，满足则添加进结果集
 * 3. 如果nums[i]大于0，则三数之和必然无法等于0，结束循环
 * 4. 如果nums[i]等于nums[i−1]，则说明该数字重复，会导致结果重复，所以应该跳过
 * 5. 当sum等于0时，nums[L]等于nums[L+1] 则会导致解集可能重复，应该跳过，L++
 * 6. 当sum等于0时，nums[R]等于nums[R−1] 则会导致解集可能重复，应该跳过，R−−
 * 
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 */

const lc_threeSum = nums => {
    if (!nums || nums.length < 3) return [];
    let result = [];
    const len = nums.length;
    nums.sort((a, b) => a - b);// 排序
    // 当前数字位于len-3的时候，后面两个就是L和R，len-2的时候已经构不成三个数了
    for (let i = 0; i < len - 2; i++) {
        // 当前数字大于0，则当前数字+L+R必定大于0（L和R位于当前数字的右边必定比当前数字大），所以结束循环
        if (nums[i] > 0) break; 
        if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重，i和i-1相等的话，有可能获取的解释相等的。比如 -1，-1，2，-1
        let L = i + 1, R = len - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                result.push([nums[i], nums[L], nums[R]]);
                while (L < R && nums[L] === nums[L + 1]) L++; // 去重
                while (L < R && nums[R] === nums[R - 1]) R--; // 去重
                L++;
                R--;
            } else if (sum < 0) {
                L++;
            } else if (sum > 0) {
                R--;
            }
        }
    }

    return result;
}

export const lc_threeSumTest = () => {
    console.log(lc_threeSum([-1, 0, 1, 2, -1, -4]));
}


/**
 * 题目地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 
 * 解题思路：双指针法
 * 
 * 数组完成排序后，我们可以放置两个指针i和j，其中i是慢指针，而j是快指针。
 * 只要 nums[i] == nums[j]，我们就增加j以跳过重复项。
 * 如果 nums[i] != nums[j]，递增i，并执行nums[i] = nums[j]。
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * 
 */

const lc_removeDuplicates = nums => {
    if (nums.length === 0) return 0;

    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

export const lc_removeDuplicatesTest = () => {
    let array = [1,1,2];
    console.log(array);

    console.log(lc_removeDuplicates(array));
    console.log(array);
}

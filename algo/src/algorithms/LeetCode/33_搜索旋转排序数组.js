/**
 * 题目地址：https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 
 * 
 * 解题思路：二分查找
 * 
 * 二分查找要求：
 * 1.必须采用顺序存储结构。
 * 2.必须按关键字大小有序排列。
 * 
 * 时间复杂度：O(logn)
 * 空间复杂度：O(1)
 */

const lc_binarySearch = (nums, target) => {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (target === nums[mid]) return mid;

        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

export const lc_searchInRotatedSortedArrayTest = () => {
    console.log(lc_binarySearch([4, 5, 6, 7, 0, 1, 2], 0));
}

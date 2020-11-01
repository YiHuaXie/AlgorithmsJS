/**
 * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/solution/
 */

/**
 * 解法1：快速排序+二分查找
 * 
 * 时间复杂度：2*N*LogN，快排N*LogN，二分LogN，N个元素的查找也是N*LogN
 */
const lc_intersect1 = (nums1, nums2) => {
    // 对nums1进行排序
    if (nums1.length > 1) nums1 = quickSort(nums1, 0, nums1.length - 1);
    let result = [];
    nums2.forEach(target => {
        const targetIndex = binarySearch(nums1, target);
        if (targetIndex > -1) {
            result.push(target);
            nums1.splice(targetIndex,1);
        }
    });

    return result;
};

// 注意：这里的快排递归借助额外存储空间
const quickSort = (nums) => {
    if (nums.length <= 1) return nums;
    const pivot = nums[nums.length - 1];
    let less = [], pivotList = [], greater = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            less.push(nums[i]);
        } else if (nums[i] > pivot)  { 
            greater.push(nums[i]);
        } else {
            pivotList.push(nums[i]);
        }
    }

    return quickSort(less).concat(pivotList, quickSort(greater));
};

// 二分查找
function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

/**
 * 解法二：哈希表
 * 
 * 时间复杂度：
 */

export const lc_intersectTest = () => {
    console.log(lc_intersect1([1, 2, 2, 1], [2, 2]));
    console.log(lc_intersect1([4, 9, 5], [9, 4, 9, 8, 4]));
};
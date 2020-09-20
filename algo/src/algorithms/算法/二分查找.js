/**
 * 二分查找
 * 
 * 时间复杂度：
 * 空间复杂度：  
 */
const binarySearch = (nums, target) => {
    if (!nums || !nums.length) return false;
    // return binarySearchImp1(nums, target, 0, nums.length - 1);
    return binarySearchImp2(nums, target);
};

/**
 * 二分查找的递归实现
 */
const binarySearchImp1 = (nums, target, left, right) => {
    const mid = parseInt((left + right) / 2);
    // 处理边界问题：为什么说left > right是超出边界了，初始状态下left和right指向的是数组的两端，
    // left只会右移，right只会左移，left右移说明nums[mid] < targe，right左移说明nums[mid] > target。
    // 只要left和right还在移动说明查找还在继续，因此当left > right则说明已经遍历完数组了
    if (left > right) return false;

    if (nums[mid] > target) {
        return binarySearchImp1(nums, target, left, mid - 1);
    } else if (nums[mid] < target) {
        return binarySearchImp1(nums, target, mid + 1, right);
    } else {
        return true;
    }
};

/**
 * 二分查找的迭代实现 
 */
const binarySearchImp2 = (nums, target) => {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return true;
        }
    }

    return false;
};

export const binarySearchTest = () => {
    console.log(binarySearch([1, 3, 4, 6, 7, 8, 13, 14], 4));
    console.log(binarySearch([1, 3, 4, 6, 7, 8, 13, 14], 1));
    console.log(binarySearch([1, 3, 4, 6, 7, 8, 13, 14], 0));
    console.log(binarySearch([1, 3, 4, 6, 7, 8, 13, 14], 14));
    console.log(binarySearch([1, 3, 4, 6, 7, 8, 13, 14], 9));
};
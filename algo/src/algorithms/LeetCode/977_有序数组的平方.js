import { quickSort } from "../算法/快速排序";
/**
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 */

/**
 * 数组平方后进行排序，排序是用快速排序
 * 
 * 时间复杂度：N * LogN，
 * 空间复杂度：
 */
function lc_sortedSquares_1(nums) {
    const newNums = nums.map(num => num * num);
    return quickSort(newNums);
}

/**
 * 双指针法
 * 
 * 
 * 时间复杂度：
 * 空间复杂度：
 */
function lc_sortedSquares_2(nums) {}

export const lc_sortedSquaresTest = () => {
    const nums = [-4, -1, 0, 3, 10];
    console.log(lc_sortedSquares_1(nums));
};
/**
 * 题目地址：https://leetcode-cn.com/problems/search-a-2d-matrix/ 
 */

/**
 * 
 * 解题思路：从左下方或者右上方开始查找，这里选择右上方，
 * 1. target > 当前值，往下查找（当前item下面的值都比当前值大）
 * 2. target < 当前值，往左查找（当前section左边的值都比当前值小）
 * 
 * 时间复杂度：O(M+N)
 * 空间复杂度：O(1)
 */
function lc_searchMatrix_1(matrix, target) {
    const sectionCount = matrix.length;
    if (!sectionCount) return false;
    const rowCount = matrix[0].length;
    if (!rowCount) return false;
    // 右上角开始查找
    let section = 0;
    let row = rowCount - 1;

    while (section >= 0 && section < sectionCount && row >= 0 && row < rowCount) {
        const num = matrix[section][row];
        if (num === target) return true;
        else if (target > num) section++;
        else row--;
    }

    return false;
}

/**
 * 解题思路：使用二分查找进行查找，不需要关心其实位置
 * 
 * 时间复杂度：O(logM + logN)
 * 空间复杂度：O(1)
 */
function lc_searchMatrix_2(matrix, target) {
    const sectionCount = matrix.length;
    if (!sectionCount) return false;
    const rowCount = matrix[0].length;
    if (!rowCount) return false;

    // 第一次二分查找合适的row
    let low = 0, high = sectionCount - 1;
    while (low <= high) {
        const middle = parseInt((low + high) / 2);
        const num = matrix[middle][0];
        if (num === target) return true;
        else if (num > target) high = middle - 1;
        else low = middle + 1 ;
    }

    if (high < 0) return false;
    const row = high;
    // 在找到的row上进行二分查找
    low = 0;
    high = matrix[row].length - 1;
    while (low <= high) {
        const middle = parseInt((low + high) / 2);
        const num = matrix[row][middle];
        if (num === target) return true;
        else if (num > target) high = middle - 1;
        else low = middle + 1;
    }

    return false;
}

export const lc_searchMatrixTest = () => {
    const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
    console.log(lc_searchMatrix_1(matrix, 3));
    console.log(lc_searchMatrix_2(matrix, 3));
}
/**
 * 
 * 解题思路：从左下方或者右上方开始查找，这里选择右上方，
 * 1. target > 当前值，往下查找（当前item下面的值都比当前值大）
 * 2. target < 当前值，往左查找（当前section左边的值都比当前值小）
 * 
 * 时间复杂度：O(M+N)
 * 空间复杂度：O(1)
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const jz_findNumberIn2DArray = (matrix, target) => {
    const sectionCount = matrix.length
    if (sectionCount === 0) return false
    const itemCount = matrix[0].length
    if (itemCount === 0) return false

    let section = 0
    let item = itemCount - 1

    while (section >= 0 && section < sectionCount && item >= 0 && item < itemCount) {
        let num = matrix[section][item]

        if (target === num) return true
        else if (target > num) section++
        else item--
    }

    return false
}

export const jz_findNumberIn2DArrayTest = () => {
    const matrix = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ]

    console.log(jz_findNumberIn2DArray(matrix, 20))
    console.log(jz_findNumberIn2DArray(matrix, 5))
}
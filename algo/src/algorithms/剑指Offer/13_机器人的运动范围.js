/**
 * 题目地址：https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
 * 
 * 解题思路：回溯法
 * 
 * 从（0，0）开始移动，当准备进入（i，j）的时候，通过函数判断是否能进入该位置。
 * 如果可以，则判断该位置相邻位置是否满足要求
 */

/**
 * 
 * @param {Number} m 行
 * @param {Number} n 列
 * @param {Number} k 位数之和
 * @return {Number}
 */
const jz_movingCount = (m, n, k) => {
    if (m <= 0 || n <= 0 || k < 0) return 0

    let visited = []
    for (let i = 0; i < m * n; i++) { visited.push(false) }

    return movingCountCore(m, n, k, 0, 0, visited)
}

const movingCountCore = (m, n, k, row, col, visited) => {
    let count = 0

    if (pointValid(m, n, k, row, col, visited)) {
        count = 1 +
            movingCountCore(m, n, k, row - 1, col, visited) +
            movingCountCore(m, n, k, row + 1, col, visited) +
            movingCountCore(m, n, k, row, col - 1, visited) +
            movingCountCore(m, n, k, row, col + 1, visited)
    }

    return count
}

const pointValid = (m, n, k, row, col, visited) => {
    function digitSum(number) {
        let sum = 0
        while (number > 0) {
            sum += number % 10
            number = parseInt(number / 10)
        }

        return sum
    }

    if (
        row >= 0 && row < m &&
        col >= 0 && col < n &&
        digitSum(row) + digitSum(col) <= k &&
        !visited[row * n + col]
    ) {
        visited[row * n + col] = true
        return true
    } else {
        return false
    }
}

export const jz_movingCountTest = () => {
    console.log(jz_movingCount(2, 3, 1))
    console.log(jz_movingCount(3, 1, 0))

}
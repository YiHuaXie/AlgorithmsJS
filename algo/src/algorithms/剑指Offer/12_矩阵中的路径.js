
/**
 * 题目地址：https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
 * 
 * 解题思路：回溯法
 * 
 * 任选一个格子作为路径的起点。假设第i个位置对应的字符为ch，如果该格子的字符也是ch，那么到其相邻格子（上、下、左、右）查找第i+1个字符。
 * 重复这个过程，知道所有字符都在矩阵中找到相应的位置。
 * 
 * 在使用回溯法的过程中，当达不到目标，就回退重新选择。基于这个特性，可以将路径看作是一个栈。
 * 当在矩阵中定义了前n个位置后，就要寻找n+1个位置的字符。如果在相邻位置没有找到的话，就要回到n-1的位置来重新确定第n个位置的字符。
 * 
 * 由于矩阵中的格子不能重复进入路径，因此额外需要一个M*N的空间来存储每个格子的标记。
 * 
 */

/**
 * @param {character[][]} board 
 * @param {string} word 
 * @return {boolean}
 */
const jz_exist = (board, word) => {
    if (!board || !board.length || !board[0].length) {
        return false
    }

    let rows = board.length, cols = board[0].length, pathLength = 0, visited = {}

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (existCore(board, rows, cols, row, col, word, pathLength, visited)) {
                return true
            }
        }
    }

    return false
}

/**
 * 
 * @param {character[][]} board 
 * @param {Number} rows 
 * @param {Number} cols 
 * @param {Number} row 
 * @param {Number} col 
 * @param {string} word 
 * @param {Number} pathLength 
 * @param {{}} visited 
 * @return {boolean}
 */
const existCore = (board, rows, cols, row, col, word, pathLength, visited) => {
    if (!word[pathLength]) { return true }

    const key = `${row}-${col}`
    let exist = false

    if (row >= 0 && row < rows && col >= 0 && col < cols && !visited[key] && board[row][col] === word[pathLength]) {
        pathLength++
        visited[key] = true
        exist = existCore(board, rows, cols, row, col - 1, word, pathLength, visited) ||
        existCore(board, rows, cols, row - 1, col, word, pathLength, visited) ||
            existCore(board, rows, cols, row, col + 1, word, pathLength, visited) ||
            existCore(board, rows, cols, row + 1, col, word, pathLength, visited)

        if (!exist) {
            pathLength--
            visited[key] = false
        }
    }

    return exist
}

export const jz_exsitTest = () => {
    let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]

    console.log(jz_exist(board, "ABCCED"))
}
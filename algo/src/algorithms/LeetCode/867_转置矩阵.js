/**
 * https://leetcode-cn.com/problems/transpose-matrix/submissions/
 */

/**
 * 转置矩阵就是将M*N的矩阵替换为N*M的矩阵
 * 
 * 时间复杂度：M*N
 * 空间复杂度：M*N
 */
function lc_transpose(matrix) {
    const rowCount = matrix.length;
    const columnCount = matrix[0].length;

    let newMatrix = [];
    for (let i = 0; i < columnCount; i++) {
        const row = [];
        for (let j = 0; j < rowCount; j++) row.push(matrix[j][i]);
        newMatrix.push(row);
    }

    return newMatrix;
}

export const lc_transposeTest = () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log(lc_transpose(matrix));
}
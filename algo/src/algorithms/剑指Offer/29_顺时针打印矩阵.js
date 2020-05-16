
/**
 * 解题思路：
 * 矩阵可以看成是若干个圈组成，因此顺时针打印矩阵就是通过循环打印若干个顺时针的圈
 * 分析循环结束的条件：
 * 矩阵的行数为rows，列数为columns。第一圈的左上角是（0，0），第二圈的左上角是（1，1），最后一圈的左上角为（N，N）。
 * 假设一个M*M的矩阵，最后一圈必定满足M > N * 2，因此循环继续的条件：columns > start * 2 && rows > start * 2
 * 
 */
const jz_spiralOrder = matrix => {
    if (!matrix || !matrix.length || !matrix[0].length) return []
    const rows = matrix.length, columns = matrix[0].length

    let start = 0, result = []

    while (columns > start * 2 && rows > start * 2) {
        matrixInCircle(matrix, result, columns, rows, start)
        start++
    }

    return result
}

const matrixInCircle = (matrix, result, columns, rows, start) => {
    const endX = columns - 1 - start;
    const endY = rows - 1 - start;

    // 从左到右打印一行
    for (let i = start; i <= endX; i++) {
        result.push(matrix[start][i])
    }

    // 从上到下打印一行
    if (start < endY) {
        for (let i = start + 1; i <= endY; i++) {
            result.push(matrix[i][endX])
        }
    }

    // 从右到左打印一行
    if (start < endX && start < endY) {
        for (let i = endX - 1; i >= start; i--) {
            result.push(matrix[endY][i])
        }
    }

    // 从下到上打印一行
    if (start < endX && start < endY - 1) {
        for (let i = endY - 1; i >= start + 1; i--) {
            result.push(matrix[i][start])
        }
    }
}

export const jz_spiralOrderTest = () => {
    console.log(jz_spiralOrder([
        [1, 2, 3, 4], 
        [5, 6, 7, 8],
        [9, 10, 11, 12], 
        [13, 14, 15, 16]
    ]))
}
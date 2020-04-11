/**
 * 题目地址：https://leetcode-cn.com/problems/sorted-merge-lcci/
 * 
 * 
 */

const mj_merge = (A, m, B, n) => {
    while (m && n) {
        if (A[m - 1] > B[n - 1]) {
            A[m + n - 1] = A[m - 1]
            m--;
        }
        else {
            A[m + n - 1] = B[n - 1]
            n--
        }
    }
    // 如果 B 还有剩余
    while (n) {
        A[m + n - 1] = B[n - 1]
        n--
    }
};
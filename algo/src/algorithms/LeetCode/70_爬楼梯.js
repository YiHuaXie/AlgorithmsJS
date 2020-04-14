/**
 * 题目地址：https://leetcode-cn.com/problems/climbing-stairs/
 * 
 * 解题思路：斐波那契数列思想
 * 
 * 时间复杂度：
 * 空间复杂度：
 */

// 递归写法
const lc_climbStairs1 = n => {
    if (n <= 0) return 0;
    if (n <= 2) return n;
    return lc_climbStairs1(n - 1) + lc_climbStairs1(n - 2);
};

// 非递归写法
const lc_climbStairs2 = n => {
    if (n <= 0) return 0;
    if (n <= 2) return n;
    let first = 1, second = 2;
    for (let i = 3; i <= n; i++) {
        let sum = first + second;
        first = second;
        second = sum;
    }

    return second
}

export const lc_climbStairsTest = () => {
    console.log(lc_climbStairs1(4));
    console.log(lc_climbStairs2(4));
};
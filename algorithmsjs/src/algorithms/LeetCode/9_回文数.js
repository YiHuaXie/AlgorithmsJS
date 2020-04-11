/**
 * 题目地址：https://leetcode-cn.com/problems/palindrome-number/
 * 
 * 解题思路：反转一半数字
 * 1. 负数肯定不是回文数
 * 2. 正数则反转右半边数字，如果左半边数字等于右半边数字的反转，则该数字是个回文数
 * 3. 判断反转数字的位数已经达到原始数字位数的一半？
 *    原始数字除以10，然后给反转后的数字乘上10，当原始数字小于反转后的数字时，就意味着我们已经处理了一半位数的数字。
 * 
 * 时间复杂度：O(log(n))
 * 空间复杂度：O(1)
 *
 */

const lc_isPalindrome = x => {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reverse = 0;
    while (x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = parseInt(x / 10);
    }

    return x === reverse || x === parseInt(reverse / 10);
}

export const lc_isPalindromeTest = () => {
    console.log(lc_isPalindrome(-1));
    console.log(lc_isPalindrome(1234));
    console.log(lc_isPalindrome(1221));
}
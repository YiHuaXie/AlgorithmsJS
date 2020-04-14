/**
 * 题目地址：https://leetcode-cn.com/problems/reverse-string/
 * 
 * 解题思路：双指针法
 * 
 * 时间复杂度：O(n)
 * 
 * 空间复杂度：O(1)
 */

const lc_reverseString = s => {
    let left = 0, right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

export const lc_reverseStringTest = () => {
    let s = ["h", "e", "l", "l", "o"];
    lc_reverseString(s);
    console.log(s);
}
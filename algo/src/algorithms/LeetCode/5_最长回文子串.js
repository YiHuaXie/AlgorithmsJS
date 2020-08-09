/**
* 题目地址：https://leetcode-cn.com/problems/longest-palindromic-substring/
* 
* 解题思路：中心拓展
* 
* 回文字符串一定是对称的，所以我们可以每次循环选择一个中心，进行左右扩展，
* 判断左右字符是否相等即可。
* 关于中心的个数，如果字符串长度为奇数，中心点是n个，如果为偶数则是n-1个。
* 
* 时间复杂度：O(n²)
* 空间复杂度：O(1)
*/

const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return right - left - 1;
}

const lc_longestPalindrome = s => {
    if (!s || s.length < 2) {
        return s;
    }

    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - ((len - 1) >> 1);
            end = i + (len >> 1);
        }
    }

    return s.substring(start, end + 1);
}

export const lc_longestPalindromeTest = () => {
    console.log(1 >> 1);
    console.log(2 >> 1);
    console.log(3 >> 1);
    console.log(4 >> 1);

    console.log(lc_longestPalindrome("babad"));
    console.log(lc_longestPalindrome("cbbd"));
}

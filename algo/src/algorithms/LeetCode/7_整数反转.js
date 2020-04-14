/**
 * 题目地址：https://leetcode-cn.com/problems/reverse-integer/
 * 
 * 解题思路：弹出和推入数字 & 溢出前进行检查
 * 
 * // pop operation:
 * pop = x % 10;
 * x /= 10;
 * 
 * // push operation:
 * temp = rev * 10 + pop;
 * rev = temp;
 * 
 * 时间复杂度：O(log(x))
 * 空间复杂度：O(1)
 */

// 7为MAX_VALUE的个位数, 8为MIN_VALUE的个位数
const MIN_VALUE = -Math.pow(2, 31);
const MAX_VALUE = Math.pow(2, 31) - 1;
const maxValueForCode = parseInt(MAX_VALUE / 10);
const minValueForCode = parseInt(MIN_VALUE / 10);

const lc_reverse = x => {
    let rev = 0;

    while (x !== 0) {
        let pop = x % 10;
        x = parseInt(x / 10);

        // rev * 10 + pop > MAX_VALUE的溢出条件如下:
        if (rev > maxValueForCode || (rev === maxValueForCode && pop > 7)) {
            return 0;
        }

        // rev * 10 + pop < MIN_VALUE的溢出条件如下：
        if (rev < minValueForCode || (rev === minValueForCode && pop < -8)) {
            return 0;
        }
        
        rev = rev * 10 + pop;
    }

    return rev;
}

export const lc_reverseTest = () => {
    console.log(lc_reverse(1234));
    console.log(lc_reverse(123458));
}
/**
 * 题目地址：https://leetcode-cn.com/problems/string-to-integer-atoi/
 * 
 * 解题思路：尽量不使用库函数，使用一个变量 index 去做线性遍历，这样遍历完成以后就得到转换以后的数值。
 * 
 * 去掉前导空格；
 * 
 * 判断第 1 个字符为 + 和 - 的情况，因此，可以设计一个变量 sign，初始化的时候为 1，如果遇到 - ，将 sign 修正为 -1；
 * 
 * 判断是否是数字，可以使用字符的 ASCII 码数值进行比较，'0'为48，'9'为57；
 * 
 * 在遇到第 1 个不是数字的字符的情况下，就得退出循环；
 * 
 * 如果转换以后的数字超过了 int 类型的范围，需要截取。这里需要将结果 res 变量设计为 long 类型，
 * 注意：由于输入的字符串转换以后也有可能超过 long 类型，因此需要在循环内部就判断是否越界，只要越界就退出循环，这样也可以减少不必要的计算；
 * 因为涉及下标访问，因此全程需要考虑数组下标是否越界的情况。
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

const MIN_VALUE = -Math.pow(2, 31);
const MAX_VALUE = (Math.pow(2, 31) - 1);
const maxValueForCode = parseInt(MAX_VALUE / 10);
const minValueForCode = parseInt(MIN_VALUE / 10);

const lc_myAtoi = str => {
    const len = str.length;

    // 去除前导空格
    let index = 0;
    while (index < len) {
        if (str[index] !== ' ') break;
        index++;
    }

    if (index === len) return 0;

    // 如果第1个字符为符号，判断正负
    let sign = 1;
    if (str[index] === '-') {
        sign = -1;
        index++;
    } else if (str[index] === '+') {
        sign = 1;
        index++;
    } 
    
    let res = 0;
    while (index < len) {
        const c = str.charCodeAt(index);
        // 判断是否为数字
        if (c > 57 || c < 48) break;

        // 环境只能存储 32 位大小的有符号整数，因此，需要提前判断乘以 10 以后是否越界
        if (res > maxValueForCode || (res === maxValueForCode && (c - 48) > MAX_VALUE % 10)) {
            return MAX_VALUE;
        }

        if (res < minValueForCode || (res === minValueForCode && (c - 48) > -(MIN_VALUE % 10))) {
            return MIN_VALUE;
        }
        // 每一步都把符号位乘进去
        res = res * 10 + sign * (c - 48);
        index++;
    }

    return res;
}

export const lc_myAtoiTest = () => {
    console.log(lc_myAtoi("42"));
    console.log(lc_myAtoi("  -42"));
    console.log(lc_myAtoi("4193 with words"));
    console.log(lc_myAtoi("words and 987"));
    console.log(lc_myAtoi("-91283472332"));
    console.log(lc_myAtoi("2147483648"));
}
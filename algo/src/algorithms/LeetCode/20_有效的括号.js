/**
 * 题目地址： https://leetcode-cn.com/problems/valid-parentheses/
 * 
 * 解题思路：使用辅助栈
 * 
 * 遍历的时候遇到左括号入栈，下次遇到的第一个右括号必须和栈顶元素匹配，否则为无效字符串，匹配完成后从栈中移除。
 * 若最终数组为空，表示括号已全部匹配完，字符串有效。
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const lc_isValid = s => {
    const map = { "(": ")", "[": "]", "{": "}" };
    const stack = []; // 用数组模拟辅助栈

    for (const c of s) {
        if (c in map) {
            stack.push(c); // 为左括号时，入栈
        } else {
            const peek = stack.pop();
            if (c !== map[peek]) return false;
        }
    }

    return stack.length === 0
}

export const lc_isValidTest = () => {
    console.log(lc_isValid("{[]}"));
    console.log(lc_isValid("()[]((()"));
}
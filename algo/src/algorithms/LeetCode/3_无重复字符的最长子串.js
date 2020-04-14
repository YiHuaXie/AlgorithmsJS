/**
 * 题目地址：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * 
 * 解题思路：使用map优化滑动窗口
 * 
 * 滑动窗口：
 * 其实就是一个队列，比如例题中的abcabcbb，进入这个队列（窗口）为abc满足题目要求，
 * 当再进入a，队列变成了abca，这时候不满足要求。我们要移动这个队列。
 * 如何移动？我们只要把队列的左边的元素移出就行了，直到满足题目要求！
 */

const lc_lengthOfLongestSubstring = s => {
    if (s.length === 0) { return 0; }

    const map = new Map();
    let maxLength = 0, location = 0; // location：无重复最长子串的开始位置

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (map.has(c)) {
            location = Math.max(location, map.get(c) + 1);
        }

        // i-location+1表示此时i,location和i索引仍处于不重复的位置，
        // i还没有向后移动，取的[location,i]长度
        maxLength = Math.max(maxLength, i - location + 1); 
        map.set(c, i);
    }

    return maxLength;
}

export const lc_lengthOfLongestSubstringTest = () => {
    console.log(lc_lengthOfLongestSubstring('abcabca'));
    console.log(lc_lengthOfLongestSubstring("ddddd"));
}
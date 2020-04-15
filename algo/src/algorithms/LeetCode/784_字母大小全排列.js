/**
 * 
 * 题目地址：https://leetcode-cn.com/problems/letter-case-permutation/
 * 
 * 解题思路：回溯法
 * 
 * 条件判断：当前字符是否为字母，可以用正则表示。 
 * 递归结束的条件：字符串遍历完成
 * 
 * 用result表示最终返回的结果，如果是字母，则新结果数组的大小为原来数组的两倍，另外需要做内容上的拷贝。如果不是字母，则对当前结果数组的每个元素添加当前字符。
 * 
 * 时间复杂度：O(2^N * N)，N是字符串的长度。
 * 
 * 空间复杂度：O(2^N * N)
 */
const lc_letterCasePermutation = s => {
    if (!s || !s.length) return []

    let result = [""]
    letterCasePermutationCore(s, result, 0)

    return result
}

const letterCasePermutationCore = (s, result, start) => {
    function isLetter(letter) {
        let pattern = new RegExp("[a-zA-Z]")
        return pattern.test(letter)
    }

    if (start === s.length) return

    if (isLetter(s[start])) {
        const curLen = result.length
        for (let i = 0; i < curLen; i++) {
            let tmp = result.shift()
            result.push(tmp + s[start].toUpperCase())
            result.push(tmp + s[start].toLowerCase())
        }
    } else {
        for (let i = 0; i < result.length; i++) {
            result[i] += s[start]
        }
    }

    return letterCasePermutationCore(s, result, start + 1)
}

export const lc_letterCasePermutationTest = () => {
    console.log(lc_letterCasePermutation("a1b2"))
    console.log(lc_letterCasePermutation("3z4"))
    console.log(lc_letterCasePermutation("12345"))
    console.log(lc_letterCasePermutation(null))
}
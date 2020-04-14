/**
 * 解题思路：双指针
 * 
 * 1. 遍历原始字符串获取空格数量，新字符串的长度（s2） = 原始字符串（s1） + 空格数 * 2
 * 2. p1指针指向s1末尾，p2指针指向s2末尾
 * 3. 没有空格的时候，将s1[p1]的值赋值到s2[p2]，p1和p2均往前平移1格子；
 * 若碰到空格，p1往前移动1格子，p2插入"%20"，并往前移动三个
 * 4. 当p1与p2相遇的时候，表明所有空格替换完成。s1[0到p1-1] + s2[p2到末尾]就是新的字符串
 * 当然也可以直接遍历完s1，返回的s2就是新的字符串
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

/**
 * @param {string} s 
 * @return {string} 
 */
const jz_replaceSpace = s => {
    if (!s || !s.length) return ""

    let spaceNum = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") { spaceNum++ }
    }

    let array = new Array(s.length + spaceNum * 2)
    // p1原字符串末尾，p2新字符串的末尾
    for (let p2 = array.length - 1, p1 = p2 - 2 * spaceNum; p1 >= 0; p1--) {
        if (s[p1] !== " ") {
            array[p2] = s[p1]
            p2 -= 1
        } else {
            array[p2] = "0"
            array[p2 - 1] = "2"
            array[p2 - 2] = "%"
            p2 -= 3
        }
    }

    return array.join("")
}

export const jz_replaceSpaceTest = () => {
    console.log(jz_replaceSpace("We are happy."))
    console.log(jz_replaceSpace("     "))
}
/**
 * 题目地址：https://leetcode-cn.com/problems/additive-number/
 * 
 * 解题思路：回溯法
 * 
 * 字符串（num）满足是累加数，它需要满足以下几个条件：
 * 1. num.length >= 3，否则无法实现加法。
 * 
 * 2. 假设a = num.substring(0, 1)，那么filterANum = num.substring(1)，
 * 假设b = filterANum.substring(0, 1)，那么remainingNum = filterAValueNum.substring(j)。
 * 在上面的过程中，a的最大长度不能超过num长度的一半，b的最大长度不能超过filterANum长度的一半，这样才可以保证加法运算的实现。
 * 
 * 3. 为了满足累加数的规则，remainingNum必定以ab之和的字符串开头。
 * "112XXX"字符串取出a为1，b为1，sum = 2, 那么"2XXX"部分必须要以2开头。
 * 如果满足该条件，则继续往下查找。此时a=b，b = sum，remainingNum则需要进行裁剪即remainingNum = remainingNum.substring(sum.length)。
 * 
 * 如果字符串是累加数，即存在一条有效路径。根据第3点可以知道，如果是累加数，最终remainingNum肯定是空字符。
 * 
 * 尝试解的条件：
 * 1. a和b不能是以0开头的字符串。
 * 2. 剩余字符串必须以ab之和的字符串开头
 * 
 * 递归结束的条件：传入的a或者b为空字符串时，递归结束。
 */

/**
 * @param {Number} num 
 */
const lc_isAdditiveNumber = num => {
    if (!num || num.length < 3) return false

    let result = false

    function isAdditiveNumberCore(aValue, bValue, num) {
        if (!aValue.length || !bValue.length) return

        let sum = nextStepValid(aValue, bValue, num)
        if (sum) {
            num = num.substring(sum.length)
            if (!num.length) result = true

            isAdditiveNumberCore(bValue, sum, num)
        }
    }

    for (let i = 1; i < parseInt(num.length / 2) + 1; i++) {
        const aValue = num.substring(0, i)
        const filterAValueNum = num.substring(i)

        for (let j = 1; j < parseInt(filterAValueNum.length / 2) + 1; j++) {
            const bValue = filterAValueNum.substring(0, j)
            const remainingNum = filterAValueNum.substring(j)
           isAdditiveNumberCore(aValue, bValue, remainingNum)
        }
    }

    return result
}

/**
 * 是否需要执行下一步，需要返回aValue、bValue的和
 * @param {string} aValue 
 * @param {string} bValue 
 * @param {string} num 
 * @return {string} 
 */
const nextStepValid = (aValue, bValue, num) => {
    // 以0开头的字符串是无效的
    if ((aValue.length > 1 && aValue[0] === "0") || (bValue.length > 1 && bValue[0]) === "0") return null

    let sum = String(Number(aValue) + Number(bValue))
    // sum的起始位置在字符串的最前面
    console.log(`aValue:${aValue}, bValue:${bValue}, sum:${sum}, remainingNum:${num}`)
    // if (num.indexOf(sum) === 0) {
    //     console.log(`${aValue}+${bValue}=${sum}, 满足剩余字符串${num}的起始位置`)
    //     return sum
    // } else {
    //     console.log(`${aValue}+${bValue}=${sum}, 不满足剩余字符串${num}的起始位置`)
    //     return null
    // }

    return num.indexOf(sum) === 0 ? sum : null
}

export const lc_isAdditiveNumberTest = () => {
    console.log(lc_isAdditiveNumber("112358"))
    console.log(lc_isAdditiveNumber("135790"))
}
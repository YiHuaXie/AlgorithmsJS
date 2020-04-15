
/**
 * 题目地址：https://leetcode-cn.com/problems/binary-watch/
 * 
 * 解题思路：回溯法
 * 
 * 本题相当于在一个num * 10的二维数组中，查找所有有效路径（一个有效时间就是一个有效路径），num的大小决定了递归的次数。
 * 有效条件判断：所有点亮的灯能转成一个有效的时间，小时相关的灯在0<= h < 11，分钟相关的灯在0<= m < 59。
 * 递归结束的条件：当前点亮的灯数量（step）等于num的时候。
 * 
 * 当点亮一盏灯（visited[i] = 1）且时间为有效时间，我们需要寻找下一盏的位置，该位置必定在当前灯的右侧，如果无效需要熄灭这盏灯
 * 若1，3位置的灯有效，那么3，1就不需要判断，直接从4到9去查找即可。
 * 
 */

/**
 * @param {Number} num 
 * @return {[string]}
 */
const lc_readBinaryWatch = num => {
    const nums = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32]
    let visited = new Array(nums.length).fill(0)
    let result = []

    readBinaryWatchCore(nums, visited, result, 0, num, 0)

    return result
}

/**
 * 回溯法核心方法
 * 
 * @param {[Number]} nums // 灯对应的值
 * @param {[Number]} visited // 所有灯的状态 
 * @param {[string]} result // 所有时间字符串 
 * @param {Number} step // 当前点亮灯的数量
 * @param {Number} num // 灯的数量 
 * @param {Number} start // 下一盏灯范围的起始位置 
 */
const readBinaryWatchCore = (nums, visited, result, step, num, start) => {
    if (step === num) {
        result.push(date(nums, visited))
        return
    }

    for (let i = start; i < visited.length; i++) {
        visited[i] = 1

        if (!timeValid(nums, visited)) {
            visited[i] = 0
            continue
        }

        readBinaryWatchCore(nums, visited, result, step + 1, num, i + 1)
        visited[i] = 0
    }
}

/**
 * 检查生成的时间是否有效
 * @param {[Number]} nums 
 * @param {[Number]} visited 
 */
const timeValid = (nums, visited) => {
    let h = 0, m = 0
    for (let i = 0; i < visited.length; i++) {
        if (visited[i] === 0) continue

        if (i < 4) h += nums[i]
        else m += nums[i]
    }

    return h >= 0 && h <= 11 && m >= 0 && m <= 59
}

/**
 * 转成时间字符串
 * @param {[Number]} nums 
 * @param {[Number]} visited 
 */
const date = (nums, visited) => {
    let h = 0, m = 0
    for (let i = 0; i < visited.length; i++) {
        if (visited[i] === 0) continue

        if (i < 4) h += nums[i]
        else m += nums[i]
    }

    return `${h}:${m < 10 ? "0" : ""}${m}`
}

export const lc_readBinaryWatchTest = () => {
    console.log(lc_readBinaryWatch(1))
    console.log(lc_readBinaryWatch(2))
    console.log(lc_readBinaryWatch(4))
}

/**
 * 解题思路：中心索引满足sum - nums[i] = leftSum * 2
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const lc_pivotIndex = nums => {
    // 获取sum
    let sum = 0
    nums.forEach(element => { sum += element });

    let leftSum = 0, index = -1
    for (let i = 0; i < nums.length; i++) {
        if (sum - nums[i] === leftSum * 2) {
            index = i
            break
        }

        leftSum += nums[i]
    }

    return index
}

export const lc_pivotIndexTest = () => {
    console.log(lc_pivotIndex([1, 7, 3, 6, 5, 6]))
    console.log(lc_pivotIndex([1, 2, 3]))
}
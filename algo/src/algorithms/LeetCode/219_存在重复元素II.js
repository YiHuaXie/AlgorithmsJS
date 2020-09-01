
// 解法1：滑动窗口
const lc_containsNearbyDuplicate = (nums, k) => {
    if (!nums.length) return false
    let i = 0, j = i + k
    while (i < nums.length - 1) {
        if (i === j) {
            i++; j = i + k
        } else if (nums[j] === nums[i]) {
            return true
        } else {
            j--
        }
    }

    return false
}

// 解法2：hashSet优化滑动窗口
// 如果set中包含元素，返回true
// 如果没有包含元素，则添加该元素
// 当set的元素个数超过K的时候，删除set中最旧的元素即nums[i - k]
const lc_containsNearbyDuplicate2 = (nums, k) => {
    if (!nums.length) return false
    let set = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true
        set.add(nums[i])
        if (set.size > k) set.delete(nums[i - k])
    }

    return false
}

export const lc_containsNearbyDuplicateTest = () => {
    console.log(lc_containsNearbyDuplicate([1, 2, 3, 1], 3))
    console.log(lc_containsNearbyDuplicate([1, 0, 1, 1], 1))
    console.log(lc_containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
    console.log(lc_containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3))
    console.log(lc_containsNearbyDuplicate2([1, 2, 3, 1], 3))
    console.log(lc_containsNearbyDuplicate2([1, 0, 1, 1], 1))
    console.log(lc_containsNearbyDuplicate2([1, 2, 3, 1, 2, 3], 2))
    console.log(lc_containsNearbyDuplicate2([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3))
}
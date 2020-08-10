/**
 * https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/
 * 
 * 解题思路：HashMap
 * 
 * 时间复杂度：O(N+M)
 * 空间复杂度：O(N)
 */
const lc_findRestaurant = (list1, list2) => {
    if (list1.length + list2.length === 0) return []

    let minIndexSum = list1.length + list2.length - 2, result = []
    let map = new Map()
    for (let i = 0; i < list1.length; i++) {
        const element = list1[i]
        if (!map.has(element)) {
            map.set(element, i)
        }
    }

    for (let i = 0; i < list2.length; i++) {
        const element = list2[i]
        if (map.has(element)) {
            const indexSum = map.get(element) + i
            if (indexSum === minIndexSum) {
                result.push(element)
            } if (indexSum < minIndexSum) {
                minIndexSum = indexSum
                result = [element]
            }
        }
    }

    return result
}

export const lc_findRestaurantTest = () => {
    console.log(lc_findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]))
    console.log(lc_findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Burger King", "Tapioca Express", "Shogun"]))
}


/**
 * 题目地址：https://leetcode-cn.com/problems/happy-number/
*/

import { ListNode } from "../数据结构/LinkedList"



/**
 * 解法1：哈希集合，如果不是快乐数字，则必然会出现重复
 * 
 * 时间复杂度：O(logN)
 * 空间复杂度：O(logN)
 * 
 */
const lc_isHappy = num => {
    let set = new Set()
    let tmp = calculate(num)
    while (tmp !== 1) {
        if (set.has(tmp)) return false
        set.add(tmp)
        tmp = calculate(tmp)
    }

    return true
}

/**
 * 解法2：快慢指针法。
 * 如果不是快乐数字，则必然会出现重复，如果将每次计算后的结果形成一个链表，
 * 那么这个链表一定是会有环路的。
 * 
 * 时间复杂度：O(logN)
 * 空间复杂度：O(1)
 * 
 */
const lc_isHappy2 = num => {
    // 哨兵对象
    let dummy = new ListNode()
    let current = dummy

    let tmp = calculate(num)
    while (tmp !== 1) {
        current.next = new ListNode(tmp)
        current = current.next
        // 链表是否有环，dummy和dummy.next都可以
        if (haveMeetingNode(dummy)) return false
        tmp = calculate(tmp)
    }

    return true
}

function haveMeetingNode(head) {
    if (!head || !head.next) return false

    let pSlow = head.next, pFast = pSlow.next
    while (pFast && pSlow) {
        if (pFast.val === pSlow.val) return true

        pSlow = pSlow.next
        pFast = pFast.next
        if (pFast) pFast = pFast.next
    }

    return false
}

function calculate(num) {
    let sum = 0
    while (parseInt(num / 10)) {
        sum += Math.pow(num % 10, 2)
        num = parseInt(num / 10)
    }

    return sum + Math.pow(num, 2)
}

export const lc_isHappyTest = () => {
    console.log(lc_isHappy(19))
    console.log(lc_isHappy(20))
    console.log(lc_isHappy2(19))
    console.log(lc_isHappy2(20))
}
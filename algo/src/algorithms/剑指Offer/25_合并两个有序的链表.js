import { SingleLinkedList } from "../数据结构/linkedList"

/**
 * 题目地址：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 * 
 * 解题思路：
 * 1.处理边界情况：当l1为空时，返回l2；当l2为空时，返回l1。
 * 2.当l1和l2均不为空时，找出值较小者作为新链表的头节点，对于剩余的部分使用递归求解。

 * 时间复杂度：O(M+N)
 * 空间复杂度：O(M+N)，递归时所用栈的深度
 */
const jz_mergeTwoLists = (l1, l2) => {
    if (!l1) return l2
    if (!l2) return l1

    let merged = null

    if (l1.val < l2.val) {
        merged = l1
        merged.next = jz_mergeTwoLists(l1.next, l2)
    } else {
        merged = l2
        merged.next = jz_mergeTwoLists(l1, l2.next)
    }

    return merged
}

export const jz_mergeTwoListsTest = () => {
    const l1 = new SingleLinkedList()
    l1.addNodes([1, 2, 3])
    
    const l2 = new SingleLinkedList()
    l2.addNodes([4, 5, 6])

    const l3 = new SingleLinkedList()
    l3.head = jz_mergeTwoLists(l1.head, l2.head)
    l3.travel()
}
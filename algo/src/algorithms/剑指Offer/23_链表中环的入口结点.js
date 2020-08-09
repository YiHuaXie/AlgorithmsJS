import { SingleLinkedList, ListNode } from "../数据结构/LinkedList"

/**
 * 解题思路：
 * 要知道链表中换的入口结点，先要知道链表是否有环，可以使用快慢指针的方式。
 * 慢指针一次走一步，快指针一次走两步，当快慢指针相等的时候，即两个指针相遇，说明链表有环。
 *
 * 通过相遇结点可以查找环的入口
 * 1. 获取环的结点数量
 * 2. 创建两个指针p1和p2，p1从链表的第一个结点开始，偏移环结点数量的位置，p2从第一个结点开始，只要p1=== p2，即为入口结点
 * 
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 */
const jz_meetingNode = head => {
    if (!head || !head.next) return null

    let slow = head.next, fast = slow.next

    while (slow && fast) {
        if (slow === fast) { return fast }

        slow = slow.next
        fast = fast.next
        if (fast) fast = fast.next
    }

    return null
}

const jz_entryNode = head => {
    let meetingNode = jz_meetingNode(head)
    if (!meetingNode) return null

    let count = 1, p1 = meetingNode, p2 = head

    // 获取环的结点数
    while (p1.next !== meetingNode) {
        p1 = p1.next
        count++
    }

    p1 = head
    for (let i = 0; i < count; i++) p1 = p1.next

    while(p1 !== p2) {
        p1 = p1.next
        p2 = p2.next
    }

    return p1
}

export const jz_entryNodeTest = () => {
    const n3 = new ListNode(3)
    const n4 = new ListNode(4)
    const n6 = new ListNode(6)

    const l1 = new SingleLinkedList()
    l1.add(n3)
    l1.add(n4)
    l1.addNodes([5, 7, 8])
    l1.add(n6)
    l1.travel()

    n6.next = n4

    const entryNode = jz_entryNode(l1.head)
    console.log(entryNode.val)
}
import { SingleLinkedList } from '../数据结构/LinkedList'
/**
 * 题目地址：https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * 
 * 解题思路：快慢指针
 * 
 * 快指针先走K步，然后快慢指针一起走，当快指针全部走完的时候，慢指针对应的结点就是倒数第K个结点
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const jz_getKthFromEnd = (head, k) => {
    if (!head) return head

    let fast = head, slow = head

    for (let i = 0; i < k; i++) fast = fast.next

    while (fast) {
        fast = fast.next
        slow = slow.next
    }

    return slow
}

export const jz_getKthFromEndTest = () => {
    let l1 = new SingleLinkedList();
    l1.addNodes([1, 5, 6, 2, 4, 3]);
    l1.travel();
    l1.head = jz_getKthFromEnd(l1.head, 2)
    l1.travel()
}
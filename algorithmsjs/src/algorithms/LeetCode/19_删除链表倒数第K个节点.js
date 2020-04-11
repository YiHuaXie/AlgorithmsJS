import { SingleLinkedList, ListNode } from "../数据结构/linkedList";

/**
 * 题目地址：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 
 * 解题思路：双指针法
 * 1.定义两个结点front和bebind指向哨兵结点,front先走n步
 * 2.当front遍历完链表的时候，bebind指向的结点即为倒数第n个结点
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

const lc_removeNthFromEnd = (head, n) => {
    let dummy = new ListNode(null);
    dummy.next = head;

    let front = dummy, behind = dummy;
    
    for (let i = 0; i <= n; i++) front = front.next;

    while (front) {
        front = front.next;
        behind = behind.next;
    }

    behind.next = behind.next.next;

    return dummy.next
}

export const lc_removeNthFromEndTest = () => {
    let l = new SingleLinkedList();
    l.addNodes([1, 2]);
    l.travel();

    l.head = lc_removeNthFromEnd(l.head, 2);
    l.travel();
}
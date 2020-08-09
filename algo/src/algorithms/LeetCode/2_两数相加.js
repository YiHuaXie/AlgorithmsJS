import { SingleLinkedList, ListNode } from '../数据结构/LinkedList'
/**
 * 题目地址：https://leetcode-cn.com/problems/add-two-numbers/
 * 
 * 解题思路：
 * 
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

const lc_addTwoNumbers = (l1, l2) => {
    const dummy = new ListNode(-1);
    let tmp = dummy, carry = false, t1 = l1, t2 = l2;

    while (t1 || t2 || carry) {
        let total = carry ? 1 : 0;

        if (t1) {
            total += t1.val;
            t1 = t1.next;
        }

        if (t2) {
            total += t2.val;
            t2 = t2.next;
        }

        carry = total > 9;

        let node = new ListNode(total % 10);
        tmp.next = node;
        tmp = tmp.next;
    }

    return dummy.next;
}

export const lc_addTwoNumTest = () => {
    let l1 = new SingleLinkedList();
    l1.addNodes([2, 4, 3]);
    l1.travel();

    let l2 = new SingleLinkedList();
    l2.addNodes([5, 6, 4]);
    l2.travel();

    let l3 = new SingleLinkedList();
    l3.head = lc_addTwoNumbers(l1.head, l2.head);
    l3.travel();
}
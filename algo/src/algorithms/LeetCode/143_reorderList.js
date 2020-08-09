import { SingleLinkedList } from '../数据结构/LinkedList';
import { lc_reserveList } from './206_反转链表';
/**
 * 题目地址：https://leetcode-cn.com/problems/reorder-list/
 *
 * 解题思路
 * 
 * 原链表：1 -> 2 -> 3 -> 4 -> 5 -> 6
 * 
 * 第一步，将链表平均分成两半
 * 1 -> 2 -> 3
 * 4 -> 5 -> 6
 * 
 * 第二步，将第二个链表逆序
 * 1 -> 2 -> 3
 * 6 -> 5 -> 4
 * 
 * 第三步，依次连接两个链表
 * 1 -> 6 -> 2 -> 5 -> 3 -> 4
 */

const lc_reorderList = head => {
    if (!head) return null;
    // 如果链表是单数，fast走完链表的时候，slow位于中间结点;
    // 如果是偶数，fast走完链表的时候，slow位于左半链表的右端
    // 因此这两种情况是可以合并的
    let fast = head, slow = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let rightHead = slow.next;
    slow.next = null;

    // 右半段链表进行反转
    rightHead = lc_reserveList(rightHead);
    let leftHead = head;

    // 链表交替合并
    while (rightHead) {
        let leftNext = leftHead.next, rightNext = rightHead.next;
        leftHead.next = rightHead;
        rightHead.next = leftNext;
        leftHead = leftNext;
        rightHead = rightNext;
    }

    return head;
}

export const lc_reoderListTest = () => {
    let l1 = new SingleLinkedList();
    l1.addNodes([1, 2, 3, 4, 5, 6]);
    l1.travel();
    l1.head = lc_reorderList(l1.head);
    l1.travel();

    let l2 = new SingleLinkedList();
    l2.addNodes([1, 2, 3, 4, 5]);
    l2.travel();
    l2.head = lc_reorderList(l2.head);
    l2.travel();

    let l3 = new SingleLinkedList();
    l3.addNodes([1]);
    l3.travel();
    l3.head = lc_reorderList(l3.head);
    l3.travel();
}
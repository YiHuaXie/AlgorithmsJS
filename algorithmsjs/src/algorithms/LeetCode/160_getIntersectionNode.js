import { SingleLinkedList, ListNode } from '../数据结构/linkedList';

/**
 * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * 
 * 关于双指针法的解题思路
 */

const lc_getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) return null;

    let set = new Set();
    let curA = headA, curB = headB;

    while (curA) {
        set.add(curA);
        curA = curA.next;
    }

    while (curB) {
        if (set.has(curB)) return curB;
        curB = curB.next;
    }

    return null;
}

export const lc_getIntersectionNodeTest = () => {
    let n = new ListNode(3);

    let l1 = new SingleLinkedList();
    l1.addNodes([1, 2, 4, 5]);
    l1.insert(n, 2);
    l1.travel();

    let l2 = new SingleLinkedList();
    l2.addNodes([9, 2, 5, 6]);
    l2.insert(n, 1);
    l2.travel();

    console.log(lc_getIntersectionNode(l1.head, l2.head));
}


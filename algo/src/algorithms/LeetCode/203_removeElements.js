import { SingleLinkedList, ListNode } from '../数据结构/LinkedList'

/**
 * 题目地址：https://leetcode-cn.com/problems/remove-linked-list-elements/
 * 
*/

const lc_removeElements = (head, val) => {
    let dummy = new ListNode(-1);
    dummy.next = head;
    
    let cur = dummy;

    while (cur && cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }

    return dummy.next;
}

export const lc_removeElementsTest = () => {
    let l = new SingleLinkedList();
    l.addNodes([1, 2, 6, 3, 4, 5, 6]);
    l.travel();

    l.head = lc_removeElements(l.head, 6);
    l.travel();
}
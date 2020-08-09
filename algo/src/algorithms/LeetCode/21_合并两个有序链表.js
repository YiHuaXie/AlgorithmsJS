import { SingleLinkedList } from '../数据结构/LinkedList';
/**
 * 题目地址：https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 
 * 解题思路：递归
 * 
 * 
 * 时间复杂度：O(n+m)
 * 空间复杂度：O(n+m)
 */

export const lc_mergeTwoLists = (l1, l2) => {
    if (!l1 || l1.length === 0) return l2;
    if (!l2 || l2.length === 0) return l1;

    let merged = null;

    if (l1.val < l2.val) {
        merged = l1;
        merged.next = lc_mergeTwoLists(l1.next, l2);
    } else {
        merged = l2;
        merged.next = lc_mergeTwoLists(l1, l2.next);
    }

    return merged;
}

export const lc_mergeTwoListsTest = () => {
    let l1 = new SingleLinkedList();
    l1.addNodes([1, 2, 3, 5]);
    l1.travel();

    let l2 = new SingleLinkedList();
    l2.addNodes([2, 4, 6, 7]);
    l2.travel();

    let l3 = new SingleLinkedList();
    l3.head = lc_mergeTwoLists(l1.head, l2.head);
    l3.travel();
}
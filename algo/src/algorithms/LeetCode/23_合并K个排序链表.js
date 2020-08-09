import { lc_mergeTwoLists } from "./21_合并两个有序链表";
import { SingleLinkedList } from "../数据结构/LinkedList";

/**
 * 题目地址：https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * 
 * 解题思路：分治法，链表两两合并
 * 
 * 时间复杂度：O(Nlogk) ，其中k是链表的数目。
 * 空间复杂度：O(1)
 */

const lc_mergeKLists = lists => {
    if (!lists || lists.length === 0) return null;

    return merge(lists, 0, lists.length - 1);
}

const merge = (lists, left, right) => {
    if (left === right) return lists[left];

    let middle = parseInt(left + (right - left) / 2);
    let l1 = merge(lists, left, middle);
    let l2 = merge(lists, middle + 1, right);

    // console.log(`${left} + ${right}`);
    return lc_mergeTwoLists(l1, l2);
}

export const lc_mergeKListsTest = () => {
    const l1 = new SingleLinkedList();
    l1.addNodes([1, 2, 3, 5]);

    const l2 = new SingleLinkedList();
    l2.addNodes([1, 2, 3, 5]);

    const l3 = new SingleLinkedList();
    l3.addNodes([1, 2, 3, 5]);

    const l4 = new SingleLinkedList();
    l4.addNodes([1, 2, 3, 5]);

    const l = new SingleLinkedList();
    l.head = lc_mergeKLists([l1.head, l2.head, l3.head, l4.head]);
    l.travel();
}
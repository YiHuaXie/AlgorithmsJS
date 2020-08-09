import { SingleLinkedList, ListNode } from '../数据结构/LinkedList';

/**
 * 题目地址：https://leetcode-cn.com/problems/insertion-sort-list/
 * 
 * 解题思路：
 * 先找个排头dummy，然后依次从head节点放入dummy，只需要依次dummy现有节点比较,插入其中!
 * 添加tail指针可以减少我们的比较次数，直接比较最后一个
 * 
 * 时间复杂度：
 * 空间复杂度：
 */

const lc_insertionSortList = head => {
    let dummy = new ListNode(Number.MIN_SAFE_INTEGER);
    let pre = dummy, tail = dummy, cur = head;

    while (cur) {
        if (tail.val < cur.val) {
            tail.next = cur;
            tail = cur;
            cur = cur.next;
        } else {
            let tmp = cur.next;
            tail.next = tmp;

            while (pre.next && pre.next.val < cur.val) {
                pre = pre.next;
            }

            cur.next = pre.next;
            pre.next = cur;
            pre = dummy;
            cur = tmp;
        }
    }

    return dummy.next;
}

export const lc_insertionSortListTest = () => {
    let l = new SingleLinkedList();
    l.addNodes([1, 3, 8, 2, 1]);
    l.travel();

    l.head = lc_insertionSortList(l.head);
    l.travel();
}
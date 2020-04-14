import { SingleLinkedList } from '../数据结构/linkedList';

/**
 * 题目地址：https://leetcode-cn.com/problems/reverse-linked-list/
 * 
 * 解题思路：
 * 
 * 在遍历列表时，将当前节点的next指针改为指向前一个元素。
 * 由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。
 * 在更改引用之前，还需要另一个指针来存储下一个节点。
 */

export const lc_reserveList = head => {
    let cur = head, pre = null;

    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
}

export const lc_reserveListTest = () => {
    let l = new SingleLinkedList();
    l.addNodes([1, 2, 3]);
    l.travel();

    l.head = lc_reserveList(l.head);
    l.travel();
}

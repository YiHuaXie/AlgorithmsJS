/**
 * 题目地址：https://leetcode-cn.com/problems/rotate-list/
 * 
 * 解题思路：将链表成环，然后通过特定位置断开即可
 * 
 * 如何确定在这个特定位置？
 * 假设链表有n个节点，向右移动k个位置，当k>=n的时候，只需要移动 k mod n 个位置即可，因为每移动n个位置，链表就会返回原来的位置。
 * 
 * 原链表：1 -> 2 -> 3 -> 4 -> 5
 * 右移1位：5 -> 1 -> 2 -> 3 -> 4   新链表的尾结点为老链表的头节点右移第3个位置的节点
 * 右移2位：4 -> 5 -> 1 -> 2 -> 3   新链表的尾结点为老链表的头节点右移第2个位置的节点
 * 
 * 新链表的尾结点为老链表的头节点右移第(n-1) - k % n个位置的节点，从0开始计数
 * 
 */

import { SingleLinkedList, ListNode } from '../数据结构/LinkedList'

/**
 * 旋转链表
 * @param {ListNode} head 
 * @param {number} k
 * @returns {ListNode} 
 */
function lc_rotateRight(head, k) {
    if (k === 0 || !head || !head.next) return head;

    // 计算链表个数以及获取链表尾节点
    let tmp = head, count = 1;
    while (tmp.next) {
        tmp = tmp.next;
        count++;
    }

    // 计算移动的位置
    let willMove = count - k % count;
    if (willMove === count) return head;

    // 链表成环
    tmp.next = head;

    while (willMove) {
        tmp = tmp.next;
        willMove--;
    }

    const result = tmp.next;
    tmp.next = null;
    return result;
}

export const lc_rotateRightTest = () => {
}
import { ListNode, SingleLinkedList } from '../数据结构/LinkedList'

/**
 * 
 * 题目地址：https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 * 
 * 解题思路：
 * 
 * 该题的val在LeetCode是整形，在《剑指Offer》的书上是一个结点。所以解法略有不同。
 * 
 * 1. val为int的解法
 * 该情况下只能使用遍历的方法进行求解
 * 
 * 2. val为ListNode的解法
 * 该情况下可以分为三种情况
 * 1. node不是尾结点，通过node.val = node.next.val和node.next = node.next.next
 * 这么做删除并不是node的内存空间，而是node.next的内存空间
 * 2. 既是头结点又是尾结点，那直接返回null
 * 3. 是多结点下的尾结点，需要找到node的前面一个结点，将next置为null
 * 
 * 
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 */

/**
 * val为int的解法
 * @param {ListNode} head 
 * @param {number} val 
 */
const jz_deleteNode1 = (head, val) => {
    const dummy = new ListNode(-1)
    dummy.next = head

    if (head.val === val) return head.next

    while (head && head.next) {
        if (head.next.val === val) {
            head.next = head.next.next
        }

        head = head.next
    }

    return dummy.next
}

/**
 * val为ListNode的解法
 * @param {ListNode} head 
 * @param {ListNode} node 
 */
const jz_deleteNode2 = (head, node) => {
    if (!head || !node) return head

    const dummy = new ListNode(-1)
    dummy.next = head

    // node不是尾结点
    if (node.next) {
        node.val = node.next.val
        node.next = node.next.next

        return dummy.next
    }

    // node是头结点又是尾结点
    if (head.val === node.val) {
        return null
    }

    // node是多结点下尾结点，找node的前一个节点
    while (head && head.next) head = head.next
    head.next = null

    return dummy.next
}

export const jz_deleteNodeTest = () => {
    let l1 = new SingleLinkedList();
    l1.addNodes([2, 4, 3]);
    l1.travel();
    l1.head = jz_deleteNode1(l1.head, 4)
    l1.travel()

    const node = new ListNode(7)
    let l2 = new SingleLinkedList();
    l2.addNodes([5, 6, 4]);
    l2.add(node)
    l2.addNodes([1, 2])
    l2.head = jz_deleteNode2(l2.head, node)
    l2.travel();
}
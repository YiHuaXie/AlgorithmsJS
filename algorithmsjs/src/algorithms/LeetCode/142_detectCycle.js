import { SingleLinkedList, ListNode } from '../数据结构/linkedList'

/**
 * 题目地址：https://leetcode-cn.com/problems/linked-list-cycle/
 * 
 * 方法：Floyd算法
 * 
 * 1. 创建快慢指针，慢指针一次走一步，快指针一次走两步，如果能够相遇，返回相遇结点
 * 2. 创建p1，p2双指针，p1从链表的第一个结点开始，偏移环结点数量的位置，p2从第一个结点开始，只要p1=== p2，即为入口结点
 */

const lc_meetingNode = head => {
    if (!head || !head.next) return null;

    let slow = head, fast = slow.next
    while (fast !== slow){
        if (!fast || !fast.next) return null;

        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

export const lc_detectCycle = head => {
    let meetingNode = lc_meetingNode(head);
    if (!meetingNode) return null;

    let count = 1, p1 = meetingNode, p2 = head;

    // 获取环的结点个数
    while (p1.next !== meetingNode) {
        p1 = p1.next;
        count++;
    }

    // p1从链表的第一个结点开始，偏移环结点数量的位置，p2从第一个结点开始，只要p1=== p2，即为入口结点
    p1 = head;
    for (let i = 0; i < count; i++) { p1 = p1.next; }

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;
}

export const lc_detectCycleTest = () => {
    let l = new SingleLinkedList();
    let n1 = new ListNode(1);
    let n2 = new ListNode(5);

    l.add(n1);
    l.addNodes([2, 3, 4]);
    l.add(n2);
    l.travel();

    n2.next = n1;

    let result = lc_detectCycle(l.head);
    if (result) console.log(result.val);
    else console.log(-1);
}

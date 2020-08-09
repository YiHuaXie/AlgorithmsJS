import { SingleLinkedList, ListNode } from '../数据结构/LinkedList'

/**
 * 题目地址：https://leetcode-cn.com/problems/linked-list-cycle/
 * 
 * 方法：快慢指针
 * 
 * 创建快慢指针，慢指针一次走一步，快指针一次走两步，如果能够相遇则说明有环
 */

export const lc_hasCycle = head => {
    if (!head || !head.next) return false;

    let slow = head, fast = slow.next
    while (fast !== slow){
        if (!fast || !fast.next) return false;

        fast = fast.next.next;
        slow = slow.next;
    }

    return true;
}

export const lc_hasCycleTest = () => {
    let l = new SingleLinkedList();
    let n1 = new ListNode(1);
    let n2 = new ListNode(5);

    l.add(n1);
    l.addNodes([2, 3, 4]);
    l.add(n2);
    l.travel();

    n2.next = n1;

    console.log(lc_hasCycle(l.head));
}

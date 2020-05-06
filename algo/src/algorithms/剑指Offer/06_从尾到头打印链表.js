import { SingleLinkedList } from '../数据结构/linkedList';

/**
 * 解题思路，使用堆栈结构
 * 
 * 堆栈的数据结构特点：后进先出
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

/**
 * 
 * @param {ListNode} head 
 * @return {number[]}
 */
const jz_reversePrint = head => {
    // 使用数组来模拟堆栈结构
    const stack = [];
    let cur = head; 

    while (cur) {
        stack.push(cur);
        cur = cur.next;
    }

    const result = [];
    while (stack.length > 0) {
        result.push(stack.pop().val);
    }

    return result;
}

export const jz_reversePrintTest = () => {
    let l = new SingleLinkedList();
    l.addNodes([1, 2, 3, 4]);
    l.travel();

    let l2 = new SingleLinkedList();
    l2.addNodes(jz_reversePrint(l.head));
    l2.travel(); 
}
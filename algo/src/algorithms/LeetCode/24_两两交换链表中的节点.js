import { ListNode, SingleLinkedList } from "../数据结构/linkedList"

const lc_swapPairs = head => {
    const dummy = new ListNode(null)
    dummy.next = head

    let pre = dummy, tmp = head

    while (tmp && tmp.next) {
        const first = tmp, second = tmp.next

        pre.next = second
        first.next = second.next
        second.next = first

        pre = first
        tmp = first.next
    }

    return dummy.next
}

export const lc_swapPairsTest = () => {
    const l = new SingleLinkedList()
    l.addNodes([1, 2, 3, 4])
    l.travel()

    l.head = lc_swapPairs(l.head)
    l.travel()
}
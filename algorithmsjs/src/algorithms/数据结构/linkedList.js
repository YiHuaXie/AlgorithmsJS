// export 
export class ListNode {

    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

export class SingleLinkedList {

    constructor() {
        this.head = null;
    }

    travel() {
        let string = "", cur = this.head;
        while (cur) {
            string += `${cur.val} -> `
            cur = cur.next
        }

        console.log(`${string}None`)
    }

    find(val) {
        let cur = this.head;
        while (cur && cur.val !== val) {
            if (cur.next) {
                cur = cur.next;
            } else {
                cur = null
            }
        }

        return cur
    }

    add(node) {
        if (!this.head) {
            this.head = node;
            return;
        }

        let cur = this.head;

        while (cur.next) { cur = cur.next; }

        cur.next = node
    }

    addNodes(nodes) {
        nodes.forEach(element => this.add(new ListNode(element)));
    }

    /**
     * 插入结点
     * @param {ListNode} node 
     * @param {Int} index 
     */
    insert(node, index) {
        if (!this.head || index <= 0) {
            node.next = this.head;
            this.head = node;

            return;
        }

        // 查找i-1结点pre
        let i = 0, pre = this.head;

        while (pre && i < index - 1) {
            pre = pre.next;
            i++;
        }

        if (!pre || i !== index - 1) {
            console.log("insert error: invalid index");
            return;
        }

        node.next = pre.next
        pre.next = node
    }
}


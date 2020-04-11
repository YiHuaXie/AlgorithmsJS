
class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

const map = new Map();

const getCopyNode = node => {
    if (!node) { return null; }

    if (!map.has(node)) {
        map.set(node, new Node(node.val, null, null));
    }

    return map.get(node);
}

const copyRandomList = head => {
    if (!head) return null;

    let oldNode = head, newNode = new Node(oldNode.val);
    map.set(oldNode, newNode);

    while (oldNode) {
        newNode.random = getCopyNode(oldNode.random);
        newNode.next = getCopyNode(oldNode.next);

        oldNode = oldNode.next;
        newNode = newNode.next;
    }

    return map.get(head);
}

export const lc_copyRandomListTest = () => {
    let s1 = new Node(7);
    let s2 = new Node(13);
    let s3 = new Node(11);
    let s4 = new Node(10);
    let s5 = new Node(1);

    s1.next = s2;
    s2.next = s3;
    s3.next = s4;
    s4.next = s5;
    s5.next = null;

    s1.random = null;
    s2.random = s1;
    s3.random = s5;
    s4.random = s3;
    s5.random = s1;

    trvael(s1);

    let result = copyRandomList(s1);

    trvael(result);
}

const trvael = head => {
    let string = "", cur = head;
        while (cur) {
            string += `当前结点：${cur} value： ${cur.val}\n ramdom：${cur.random}\n---------------------------------\n`
            cur = cur.next
        }

        console.log(`${string}None`)
}
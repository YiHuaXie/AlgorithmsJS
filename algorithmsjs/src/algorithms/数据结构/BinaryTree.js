export class TreeNode {

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// 中序遍历递归
const recursiveInorderTraversal = n => {
    if (n) {
        recursiveInorderTraversal(n.left);
        console.log(n.val);
        recursiveInorderTraversal(n.right);
    }
}

// 后序遍历递归
const recursivePostorderTraversal = n => {
    if (n) {
        recursivePostorderTraversal(n.left);
        recursivePostorderTraversal(n.right);
        console.log(n.val);
    }
}

// 先序遍历递归
const recursivePreorderTraversal = n => {
    if (n) {
        console.log(n.val);
        recursivePreorderTraversal(n.left);
        recursivePreorderTraversal(n.right);
    }
}

// 所有叶结点递归
const recursiveLeafNodes = n => {
    if (n) {
        if (!n.left && !n.right) console.log(n.val);
        recursiveLeafNodes(n.left);
        recursiveLeafNodes(n.right);
    }
}

// 树的高度递归
const recursiveTreeHeight = n => {
    if (!n) return 0;

    let left = recursiveTreeHeight(n.left);
    let right = recursiveTreeHeight(n.right);

    return left > right ? left + 1 : right + 1;
}

// 中序遍历非递归
export const inorderTraversal = visit => {
    const stack = [], res = [];

    while (stack.length > 0 || visit) {
        if (visit) {
            stack.push(visit);
            visit = visit.left;
        } else {
            visit = stack.pop();
            res.push(visit.val);
            visit = visit.right;
        }
    }

    return res;
}

// 先序遍历非递归
export const preorderTraversal = visit => {
    const stack = [], res = [];
    if (visit) stack.push(visit);

    while (stack.length > 0) {
        visit = stack.pop();
        res.push(visit.val);

        // 栈的顺序后进先出，所有先push右子树
        if (visit.right) stack.push(visit.right);
        if (visit.left) stack.push(visit.left);
    }

    return res;
}

// 后序遍历非递归
export const postorderTraversal = visit => {
    const stack = [], res = [];
    let mark = null;

    while (stack.length > 0 || visit) {
        if (visit) {
            stack.push(visit);
            visit = visit.left;
        } else {
            let top = stack[stack.length - 1];
            if (top.right && mark !== top.right) {
                visit = top.right;
            } else {
                res.push(top.val);
                mark = stack.pop();
            }
        }
    }

    return res;
}

// 层序遍历：使用队列
export const levelOrderTraversal = visit => {
    const queue = [], res = [];

    if (visit) queue.push(visit);

    while (queue.length > 0) {
        const peek = queue[0];
        res.push(peek.val);

        if (peek.left) queue.push(peek.left);
        if (peek.right) queue.push(peek.right);

        // 出队
        queue.splice(0, 1);
    }

    return res;
}

// 所有叶结点非递归：遍历的时候增加一个条件判断即可
export const leafNodes = visit => {
    const stack = [], res = [];
    if (visit) stack.push(visit);

    while (stack.length > 0) {
        visit = stack.pop();
        if (!visit.left && !visit.right) res.push(visit.val);

        if (visit.right) stack.push(visit.right);
        if (visit.left) stack.push(visit.left);
    }

    return res;
}

// 树的高度非递归：利用层序遍历的思想
export const treeHeight = visit => {
    if (!visit) return 0;

    const queue = [visit];
    let height = 0;

    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            const peek = queue[0];
            queue.splice(0, 1);

            if (peek.left) queue.push(peek.left);
            if (peek.right) queue.push(peek.right);
        }
        height++;
    }

    return height;
}

export const binaryTreeTest = () => {
    const r = new TreeNode("A");
    // 左子树
    r.left = new TreeNode("B");
    r.left.left = new TreeNode("D");
    r.left.right = new TreeNode("F");
    r.left.right.left = new TreeNode("E");
    // 右子树
    r.right = new TreeNode("C");
    r.right.left = new TreeNode("G");
    r.right.right = new TreeNode("I");
    r.right.left.right = new TreeNode("H");

    console.log(`中序遍历：${inorderTraversal(r)}`);
    console.log(`先序遍历：${preorderTraversal(r)}`);
    console.log(`后序遍历：${postorderTraversal(r)}`);
    console.log(`层序遍历：${levelOrderTraversal(r)}`);
    console.log(`所有叶结点：${leafNodes(r)}`);
    console.log(`树的高度:${treeHeight(r)}`);

    recursiveInorderTraversal(r);
    recursivePreorderTraversal(r);
    recursivePostorderTraversal(r);
    console.log("所有叶结点:");
    recursiveLeafNodes(r);
    console.log(`树的高度:${recursiveTreeHeight(r)}`);
}

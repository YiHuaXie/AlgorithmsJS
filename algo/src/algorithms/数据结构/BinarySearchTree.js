import { TreeNode, preorderTraversal, inorderTraversal, postorderTraversal } from "./BinaryTree";

const recursiveBSTFind = (root, x) => {
    if (!root) return null;

    if (x > root.val) return recursiveBSTFind(root.right, x);
    else if (x < root.val) return recursiveBSTFind(root.left, x);
    else return root;
}

const recursiveBSTFindMin = root => {
    if (!root) return null;
    else if (root.left) return recursiveBSTFindMin(root.left);
    else return root;
}

const recursiveBSTFindMax = root => {
    if (!root) return null;
    else if (root.right) return recursiveBSTFindMax(root.right);
    else return root;
}

// 插入元素，并返回树的根结点
const recursiveBSTInsert = (root, x) => {
    if (!root) {
        root = new TreeNode(x);
        return root;
    }

    if (root.val > x) root.left = recursiveBSTInsert(root.left, x);
    else if (root.val < x) root.right = recursiveBSTInsert(root.right, x);

    return root;
}

// 删除元素递归实现，并返回树的根结点
const recursiveBSTDelete = (root, x) => {
    if (!root) return null;

    if (root.val > x) root.left = recursiveBSTDelete(root.left, x);
    else if (root.val < x) root.right = recursiveBSTDelete(root.right, x);
    else { // 说明已经找到这个结点，开始做删除操作
        if (root.left && root.right) {
            // 这里使用右子树的最小值进行替换
            // 找到对应的值先替换，接着删除原来这个值对应的结点
            const tmp = bstFindMin(root.right);
            root.val = tmp.val;
            root.right = recursiveBSTDelete(root.right, root.val);
        } else {
            // 有右孩子或者无子结点
            if (!root.left) root = root.right;
            // 有左孩子或者无子结点
            else root = root.left;
        }
    }

    return root;
}

export const bstFind = (root, x) => {
    while (root) {
        if (x > root.val) root = root.right;
        else if (x < root.val) root = root.left
        else break;
    }

    return root;
}

export const bstFindMax = root => {
    if (!root) return null;

    while (root.right) root = root.right;

    return root;
}

export const bstFindMin = root => {
    if (!root) return null;

    while (root.left) root = root.left;

    return root;
}

export const bstInsert = (root, x) => {
    if (!root) return new TreeNode(x);

    const dummy = root;

    while (root) {
        if (root.val > x) {
            if (root.left) {
                root = root.left;
            } else {
                root.left = new TreeNode(x);
                break;
            }
        } else if (root.val < x) {
            if (root.right) {
                root = root.right;
            } else {
                root.right = new TreeNode(x);
                break;
            }
        } else {
            break;
        }
    }

    return dummy;
}

// export const bstDelete = (root, x) => {
//     if (!root) return null;

//     const dummy = root;

//     while (root) {
//         if (root.val > x) root = root.left;
//         else if (root.val < x) root = root.right;
//         else {
//             if (root.left && root.right) {



//                 root.val = bstFindMin(root.right, root.val).val;
//                 root.right = root.right.right;
//                 x = root.val;
//             } else {
//                 if (!root.left) root = root.right;
//                 else root = root.left;
//             } 
//         }
//     }

//     return dummy;
// }

export const isBST = root => {

}

export const binarySearchTreeTest = () => {
    const r = new TreeNode(18);
    // 左子树
    r.left = new TreeNode(10);
    r.left.left = new TreeNode(7);
    r.left.right = new TreeNode(15);
    r.left.left.right = new TreeNode(9);
    // 右子树
    r.right = new TreeNode(20);
    r.right.right = new TreeNode(22);

    console.log("查找元素递归实现");
    let findResult = recursiveBSTFind(r, 20);
    console.log(`查找元素20：${findResult ? findResult.val : "null"}`);
    console.log(`查找最大元素：${recursiveBSTFindMax(r).val}`);
    console.log(`查找最小元素：${recursiveBSTFindMin(r).val}`);

    console.log("查找元素迭代实现");
    findResult = bstFind(r, 20);
    console.log(`查找元素20：${findResult ? findResult.val : "null"}`);
    console.log(`查找最大元素：${bstFindMax(r).val}`);
    console.log(`查找最小元素：${bstFindMin(r).val}`);

    console.log("插入元素递归实现");
    let nr = recursiveBSTInsert(r, 30);
    console.log(r.right.right.right.val);
    console.log(`先序遍历：${preorderTraversal(nr)}`);
    console.log(`中序遍历：${inorderTraversal(nr)}`);

    nr = recursiveBSTInsert(r, 21);
    console.log(r.right.right.left.val);
    console.log(`先序遍历：${preorderTraversal(nr)}`);
    console.log(`中序遍历：${inorderTraversal(nr)}`);

    console.log("插入元素迭代实现");
    nr = bstInsert(r, 30);
    console.log(r.right.right.right.val);
    console.log(`先序遍历：${preorderTraversal(nr)}`);
    console.log(`中序遍历：${inorderTraversal(nr)}`);

    const r2 = new TreeNode(30);
    // 左子树
    r2.left = new TreeNode(15);
    // 右子树
    r2.right = new TreeNode(41);
    r2.right.left = new TreeNode(33);
    r2.right.left.right = new TreeNode(35);
    r2.right.left.right.left = new TreeNode(34);
    r2.right.right = new TreeNode(50);

    console.log("删除元素递归实现");
    nr = recursiveBSTDelete(r2, 41);
    console.log(`先序遍历：${preorderTraversal(nr)}`);
    console.log(`中序遍历：${inorderTraversal(nr)}`);

    // console.log("删除元素迭代实现");
    // nr = bstDelete(r2, 41);
    // console.log(`先序遍历：${preorderTraversal(nr)}`);
    // console.log(`中序遍历：${inorderTraversal(nr)}`);

    // nr = bstDelete(nr, 34);
    // console.log(`先序遍历：${preorderTraversal(nr)}`);
    // console.log(`中序遍历：${inorderTraversal(nr)}`);
}
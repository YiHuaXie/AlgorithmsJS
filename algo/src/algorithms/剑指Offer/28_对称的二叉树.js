import { TreeNode } from "../数据结构/BinaryTree"

/**
 * 题目地址：https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
 * 
 * 解题思路：通过二叉树的前序遍历和其对称二叉树的前序遍历做比较，如果两个序列是一样的，那么该二叉树就是对称的。
 * n1.left和n2.right做比较，就相当与对称二叉树在做比较
 * 
 * 时间复杂度：O(N)，N为二叉树的结点数量，最多执行N/2次判断方法。
 * 空间复杂度：O(N)，最差情况下，二叉树退化为链表，系统使用N大小的栈空间
 */
const jz_isSymmetric = root => {
   return isSymmetricCore(root, root)
}

const isSymmetricCore = (n1, n2) => {
    // 两个空结点
    if (!n1 && !n2) return true
    // 一个为空，一个不为空
    if (!n1 || !n2) return false

    if (n1.val !== n2.val) return false

    return isSymmetricCore(n1.left, n2.right) && isSymmetricCore(n1.right, n2.left)
}

export const jz_isSymmetricTest = () => {
    const r = new TreeNode(1)
    // 左子树
    r.left = new TreeNode(2)
    r.left.left = new TreeNode(3)
    r.left.right = new TreeNode(4)
    // 右子树
    r.right = new TreeNode(2)
    r.right.left = new TreeNode(4)
    r.right.right = new TreeNode(3)
    // r.right.right.left = new TreeNode(3)

    console.log(jz_isSymmetric(r))
}
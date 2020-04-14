import { TreeNode, postorderTraversal } from "../数据结构/BinaryTree"

/**
 * 解题思路： 
 * 
 * 重建二叉树的条件：已知前序和中序遍历或者后序和中序遍历才能求出原始二叉树
 * 
 * 前序：1，2，4，7，3，5，6，8
 * 中序：4，7，2，1，5，3，8，6
 * 前序遍历后的第一个结点为根结点，1为根结点，[2，4，7]为左子树（L1），[3，5，6，8]为右子树（R1）
 * 
 * L1的前序：2，4，7
 * L1的中序：4，7，2
 * 2为左子树的根结点，[4, 7]为L1的左子树（L2）
 * 
 * L2的前序：4，7
 * L2的中序：4，7
 * 4为L2的根结点，7为左结点
 * 
 * 右子树的分析也是如上
 * 
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const jz_buildTree = (preorder, inorder) => {
    if (!preorder || !preorder.length || !inorder || !inorder.length) {
        return null
    }
 
    const r = new TreeNode(preorder[0])
    const i = inorder.indexOf(r.val)

    r.left = jz_buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
    r.right = jz_buildTree(preorder.slice(i + 1), inorder.slice(i + 1))

    return r
}

export const jz_buildTreeTest = () => {
    const preorder = [1, 2, 4, 7, 3, 5, 6, 8]
    const inorder = [4, 7, 2, 1, 5, 3, 8, 6]
    let r = jz_buildTree(preorder, inorder)
    
    console.log(postorderTraversal(r)) 
}
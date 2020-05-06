import { TreeNode } from "../数据结构/BinaryTree"

/**
 * 题目地址：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
 * 
 * 解题思路：
 * 
 * 1.在树A中找到和树B的根结点的值一样的结点R
 * 2.判断树A中以R为根结点的子树是不是包含和树B一样的结构
 * 
 * 时间复杂度：O(MN)，M,N分别为树A和树B的结点数量。
 * 查找结点R即遍历树A需要M次，判断R与树B的结构需要N次。
 * 
 * 空间复杂度：O(M)，最差情况下，遍历完树A都找不到，此时递归的深度为M。
 */
const jz_isSubStructure = (A, B) => {
    let result = false

    if (A && B) {
        if (A.val === B.val) result = treeAHasTreeB(A, B)
        if (!result) result = jz_isSubStructure(A.left, B)
        if (!result) result = jz_isSubStructure(A.right, B)
    }

    return result
}

const treeAHasTreeB = (R, B) => {
    // B遍历完了，说明R包含和树B一样的结构
    if (!B) return true
    // R遍历完了，但是B还没有遍历完，那么B肯定不是R的子结构
    if (!R) return false
    if (R.val !== B.val) return false

    return treeAHasTreeB(R.left, B.left) && treeAHasTreeB(R.right, B.right)
}

export const jz_isSubStructureTest = () => {
    const A = new TreeNode(8);
    // 左子树
    A.left = new TreeNode(8);
    A.left.left = new TreeNode(9);
    A.left.right = new TreeNode(2);
    A.left.right.left = new TreeNode(4);
    A.left.right.right = new TreeNode(7);
    // 右子树
    A.right = new TreeNode(7);

    const B = new TreeNode(8);
    B.left = new TreeNode(9);
    B.right = new TreeNode(2);

    console.log(jz_isSubStructure(A, B))
}
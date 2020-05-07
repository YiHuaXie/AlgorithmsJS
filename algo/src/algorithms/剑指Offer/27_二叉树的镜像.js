import { TreeNode, levelOrderTraversal } from "../数据结构/BinaryTree"

const jz_mirrorTree = root => {
    if (!root) return root // 空树
    if (!root.left && !root.right) return root // 只有一个结点的树

    // 交换
    const tmp = root.left
    root.left = root.right
    root.right = tmp

    // 左右子树
    jz_mirrorTree(root.left)
    jz_mirrorTree(root.right)

    return root
}

export const jz_mirrorTreeTest = () => {
    const r = new TreeNode(8)
    // 左子树
    r.left = new TreeNode(6)
    r.left.left = new TreeNode(5)
    r.left.right = new TreeNode(7)
    // 右子树
    r.right = new TreeNode(10)
    r.right.left = new TreeNode(9)
    r.right.right = new TreeNode(11)

    let result = levelOrderTraversal(r)
    console.log("层序遍历：" + result)

    const r2 = jz_mirrorTree(r)
    result = levelOrderTraversal(r2)
    console.log("镜像的层序遍历：" + result)
}

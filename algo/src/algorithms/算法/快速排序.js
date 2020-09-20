export const quickSort = nums => {
    if (!nums || nums.length < 2) return nums;
    quickSortImp1(nums, 0, nums.length - 1);
    return nums;
};

/**
 * 快排不借助额外空间原地分割
 * 
 * 空间复杂度：O(LogN)，用到了递归的栈空间
 */
const quickSortImp1 = (nums, left, right) => {
    // 在递归的时候要考虑到一个边界问题，如果left本身就大于right那直接就是错位，没有必要再执行后面的代码
    if (left > right) return;
    // 1. 获取主元
    const pivot = getPivot(nums, left, right);
    // 2. 设置两个指针low，high。low从左到右，high从右到左
    let low = left, high = right - 1;
    // 5.1 重复3和4步骤直到low与high错位
    while (true) {
        // 3. low从左到右，查找到比主元大的元素则停止；high从右到左查找到比主元小的元素则停止
        while (nums[low] < pivot) low++;
        while (nums[high] > pivot) high--;

        if (low < high) {
            // 4. 若low与high没有错位，则交换对应位置上的元素
            swap(nums, low, high);
        } else {
            break;
        }
    }
    // 5.2 将low位置的元素与主元对调，到这里就完成了一次快排。此时主元左边的元素都小于主元，主元右边的元素都大于主元
    swap(nums, low, right);
    // 6. 分别对主元左/右边的集合进行递归
    quickSortImp1(nums, left, low - 1);
    quickSortImp1(nums, low + 1, right);
};

/**
 * 快排借助额外的空间
 */
const quickSortImp2 = (nums) => {
    if (nums.length <= 1) return nums;
    const pivot = getPivot(nums, 0, nums.length - 1);
    let less = [], greater = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            less.push(nums[i]);
        } else if (nums[i] >= pivot && i !== nums.length - 1)  { 
            // 很重要的一点：不能取基准的位置，否则对greater递归的时候会进入死循环
            greater.push(nums[i]);
        }
    }

    return quickSortImp2(less).concat([pivot], quickSortImp2(greater));
};

/**
 * 获取主元，可以通过nums[left]、nums[right]、nums[(left+right) / 2]的中值作为主元
 */
function getPivot(nums, left, right) {
    let middle = parseInt((left + right) / 2);
    if (nums[left] > nums[middle]) swap(nums, left, middle);
    if (nums[left] > nums[right]) swap(nums, left, right);
    if (nums[middle] > nums[right]) swap(nums, middle, right);
    // 经过调整后，最左元<=主元<=最右元, 将主元与最后元交换
    swap(nums, middle, right);

    return nums[right];
}

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

export const quickSortTest = () => {
    let nums1 = [85, 12, 59, 36, 62, 43, 94, 7, 35, 52, 44];
    quickSortImp1(nums1, 0, nums1.length - 1);
    console.log(nums1);

    const nums2 = [85, 12, 59, 44, 62, 44, 94, 7, 35, 52, 44];
    console.log(quickSortImp2(nums2));
};

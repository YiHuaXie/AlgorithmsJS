/**
 * 题目地址：https://leetcode-cn.com/problems/container-with-most-water/
 * 
 * 解题思路：双指针法
 * 
 * 设置双指针front，behind分别位于数组两端，根据规则移动指针更新面积最大值maxArea，直到front == behind返回maxArea
 * 
 * 当前围栏面积公式：
 * S(front, behind) = min(nums[front], nums[behind]) * (behind - front)
 * 若front对应的值小，front++，若front对应的值大，behind--
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const lc_maxArea = height => {
    let maxArea = 0, front = 0, behind = height.length - 1;

    while (front < behind) {
        if (height[front] < height[behind]) {
            maxArea = Math.max(maxArea, height[front] * (behind - front));
            front++;
        } else {
            maxArea = Math.max(maxArea, height[behind] * (behind - front));
            behind--;
        }
    }

    return maxArea;
};


export const lc_maxAreaTest = () => {
    console.log(lc_maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
};
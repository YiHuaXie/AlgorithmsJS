/**
 * 题目地址： https://leetcode-cn.com/problems/remove-element/
 * 
 * 解题思路：双指针
 * 
 */

function removeElement(nums, val) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      swap(nums, left, right);
      left++;
    }
  }

  return left;
}

function swap(nums, i, j) {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

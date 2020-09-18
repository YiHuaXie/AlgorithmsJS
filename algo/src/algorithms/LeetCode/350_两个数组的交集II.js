// const lc_intersect = (nums1, nums2) => {
//     let result = [];
//     nums1.forEach(target => {
//         if (binarySearch(nums2, target)) result.push(target);
//     });

//     return result;
// }

// const binarySearch = (nums, target) => {
//     let left = 0, right = nums.length - 1;
//     while (left <= right) {
//         const mid = parseInt((left + right) / 2);
//         if (nums[mid] < target) {
//             left = mid + 1;
//         } else if (nums[mid] > target) {
//             right = mid - 1;
//         } else {
//             return true;
//         }
//     }

//     return false
// };

export const lc_intersectTest = () => {
    // console.log(lc_intersect([1, 2, 2, 1], [2, 2]));
    // console.log(lc_intersect([4, 9, 5], [9, 4, 9, 8, 4]));
};
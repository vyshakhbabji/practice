/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {

    let left = 0, right = 0;
    let max = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            k--;
        }
        while (k < 0) {
            if (nums[left] === 0) {
                k++;
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }

    return max;
};

// Test cases
let nums1 = [1,1,1,0,0,0,1,1,1,1,0], k1 = 2;
console.log(longestOnes(nums1, k1)); // Output: 6

let nums2 = [0,0,1,1,1,0,0], k2 = 0;
console.log(longestOnes(nums2, k2)); // Output: 3

let nums3 = [1,1,1,0,0,0,1,1,1,1], k3 = 0;
console.log(longestOnes(nums3, k3)); // Output: 4

let nums4 = [1,0,1,0,1,0,1], k4 = 1;
console.log(longestOnes(nums4, k4)); // Output: 4

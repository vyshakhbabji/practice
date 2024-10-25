//You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:
//
// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.
//
// A subarray is a contiguous non-empty sequence of elements within an array.

var maximumSubarraySum = function(nums, k) {
    const uniqueElements = new Set();
    let currentSum = 0;
    let maxSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        while (uniqueElements.has(nums[right])) {
            uniqueElements.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }
        uniqueElements.add(nums[right]);
        currentSum += nums[right];

        if (right - left + 1 === k) {
            maxSum = Math.max(maxSum, currentSum);
            uniqueElements.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }
    }

    return maxSum;
}
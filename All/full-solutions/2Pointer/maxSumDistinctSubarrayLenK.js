function maximumSumOfDistinctSubarray(nums, k) {
    const n = nums.length;
    if (n < k) return 0;

    let left = 0, right = 0;
    let maxSum = 0;
    let currentSum = 0;
    const seen = new Set();

    while (right < n) {
        while (seen.has(nums[right])) {
            seen.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }

        seen.add(nums[right]);
        currentSum += nums[right];
        right++;

        if (right - left === k) {
            maxSum = Math.max(maxSum, currentSum);
            seen.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }
    }

    return maxSum;
}

// Example usage:
const nums = [4, 2, 4, 5, 6];
const k = 3;
console.log(maximumSumOfDistinctSubarray(nums, k)); // Output: 15 (Subarray [4, 5, 6])

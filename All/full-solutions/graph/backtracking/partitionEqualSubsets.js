function canPartitionKSubsets(nums, k) {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    if (totalSum % k !== 0) return false;

    const target = totalSum / k;
    nums.sort((a, b) => b - a);
    const used = new Array(nums.length).fill(false);

    function backtrack(start, k, currentSum) {
        if (k === 0) return true;
        if (currentSum === target) return backtrack(0, k - 1, 0);

        for (let i = start; i < nums.length; i++) {
            if (!used[i] && currentSum + nums[i] <= target) {
                used[i] = true;
                if (backtrack(i + 1, k, currentSum + nums[i])) return true;
                used[i] = false;
            }
        }
        return false;
    }

    return backtrack(0, k, 0);
}

// Example usage:
console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)); // Output: true
console.log(canPartitionKSubsets([1, 2, 3, 4], 3));          // Output: false

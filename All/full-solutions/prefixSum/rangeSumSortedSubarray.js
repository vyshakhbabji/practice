function rangeSum(nums, n, left, right) {
    let subarraySums = [];

    // Step 1: Generate all subarray sums
    for (let i = 0; i < n; i++) {
        let currentSum = 0;
        for (let j = i; j < n; j++) {
            currentSum += nums[j];
            subarraySums.push(currentSum);
        }
    }

    // Step 2: Sort the subarray sums
    subarraySums.sort((a, b) => a - b);

    // Step 3: Calculate the sum of the range [left, right]
    let result = 0;
    for (let i = left - 1; i < right; i++) {
        result += subarraySums[i];
    }

    // Assuming we need to return the sum modulo 10^9 + 7 to avoid overflow
    return result % (10**9 + 7);
}

// Example usage:
const nums = [1, 2, 3, 4];
const n = nums.length;
const left = 1;
const right = 5;

console.log(rangeSum(nums, n, left, right)); // Output: 13

function rangeSum(nums, n, left, right) {
    let prefixSums = new Array(n + 1).fill(0);
    let subarraySums = [];

    // Step 1: Compute the prefix sum array
    for (let i = 0; i < n; i++) {
        prefixSums[i + 1] = prefixSums[i] + nums[i];
    }

    // Step 2: Generate all subarray sums using the prefix sum array
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = prefixSums[j + 1] - prefixSums[i];
            subarraySums.push(sum);
        }
    }

    // Step 3: Sort the subarray sums
    subarraySums.sort((a, b) => a - b);

    // Step 4: Calculate the sum of the range [left, right]
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

function slidingWindowAverages(nums, k) {
    let n = nums.length;
    if (n < k) return [];

    let result = [];
    let windowSum = 0;

    // Calculate the sum of the first window
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    result.push(windowSum / k);

    // Slide the window across the array
    for (let i = k; i < n; i++) {
        windowSum += nums[i] - nums[i - k];
        result.push(windowSum / k);
    }

    return result;
}

// Example usage:
console.log(slidingWindowAverages([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // Output: [2, 3, 4, 5, 6, 7, 8]
console.log(slidingWindowAverages([4, 2, 2, 1, 7], 2));             // Output: [3, 2, 1.5, 4]

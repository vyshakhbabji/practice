function firstMissingPositive(nums) {
    const n = nums.length;

    // First pass: place each number in its correct position
    for (let i = 0; i < n; i++) {

        // check if nums[i] is between 1 and _n and  nums[nums[i]-1[ !  = nums[i]
        //in plain english : check if the number is within the range and the index is not the same as the number
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap nums[i] with nums[nums[i] - 1]
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }

    // Second pass: find the first missing positive
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all numbers are in their correct position, return n + 1
    return n + 1;
}

// Example usage:
console.log(firstMissingPositive([9, 3, 4, 8, 7]));  // Output: 1
console.log(firstMissingPositive([1, 2, 0]));  // Output: 3
console.log(firstMissingPositive([3, 4, -1, 1]));  // Output: 2

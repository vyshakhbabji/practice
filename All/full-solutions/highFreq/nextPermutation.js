function nextPermutation(nums) {
    // Step 1: Find the first pair from the right where nums[i] < nums[i+1]
    let i = nums.length - 2;
    while (i >= 0) {
        if (nums[i] < nums[i + 1]) {
            break; // Found the first decreasing element from the right
        }
        i--;
    }

    // Step 2: If no such pair found, reverse the whole array
    if (i < 0) {
        reverse(nums, 0, nums.length - 1);
        return;
    }

    // Step 3: Find the smallest number on the right that's larger than nums[i]
    let j = nums.length - 1;
    while (i<j) {
        if (nums[i] < nums[j]) {
            break; // Found the first element larger than nums[i]
        }
        j--;
    }

    // Step 4: Swap nums[i] with the number found in step 3
    [nums[i], nums[j]] = [nums[j], nums[i]];

    // Step 5: Reverse the subarray to the right of i
    reverse(nums, i + 1, nums.length - 1);

    function reverse(nums, l, r) {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
}



// Example usage:
    let nums = [4, 1, 2, 3, 1];
    nextPermutation(nums);
    console.log(nums); // Output: [4, 1, 3, 1, 2]



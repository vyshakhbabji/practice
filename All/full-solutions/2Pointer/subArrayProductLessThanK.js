//Move the right pointer to expand the window.
// Multiply prod by nums[right].
// While prod is greater than or equal to k, shrink the window from the left by dividing prod by nums[left] and increment left.
// Add the number of subarrays ending at right to count.


function numSubarrayProductLessThanK(nums, k) {
    if (k <= 1) return 0; // If k is 1 or less, no product can be less than k.

    let left = 0;
    let product = 1;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];

        // Adjust the left pointer until the product is less than k
        while (product >= k) {
            product /= nums[left];
            left++;
        }

        // All subarrays ending at right are valid
        count += right - left + 1;
    }

    return count;
}

// Example input
const nums = [10, 5, 2, 6];
const k = 100;
console.log(numSubarrayProductLessThanK(nums, k)); // Output should be 8
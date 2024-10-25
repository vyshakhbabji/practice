var numSubarrayProductLessThanK = function(nums, k) {

    // r, l are the right and left boundaries of the subarray
    // that we are currently considering
    let n = nums.length;
    let product = 1;
    let count = 0;
    let left = 0;
    for (let right = 0; right < n; right++) {
        product *= nums[right];
        while (product >= k && left <= right) {
            product /= nums[left];
            left++;
        }
        count += right - left + 1;
    }
    return count;

};
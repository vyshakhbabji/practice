function findMin(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;  // Minimum is in the right half
        } else {
            right = mid;  // Minimum is at mid or in the left half
        }
    }

    return nums[left];  // At the end, left == right, pointing to the minimum
}

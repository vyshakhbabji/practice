//Local minimum in array (like find peak element but with minimum)

function findLocalMinimum(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if ((mid === 0 || nums[mid] < nums[mid - 1]) &&
            (mid === nums.length - 1 || nums[mid] < nums[mid + 1])) {
            return mid;  // Found local minimum
        } else if (mid > 0 && nums[mid] > nums[mid - 1]) {
            right = mid - 1;  // Search in the left half
        } else {
            left = mid + 1;  // Search in the right half
        }
    }

    return left;  // or return right; since left == right
}


// Example usage:
console.log(findLocalMinimum([9, 6, 3, 14, 5, 7, 4])); // Output: index of any local minimum, e.g., 2 (value 3)
console.log(findLocalMinimum([23, 8, 15, 2, 3]));      // Output: 1 (value 8) or 3 (value 2)


function findLocalMinimum(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if ((mid === 0 || nums[mid] < nums[mid - 1]) &&
            (mid === nums.length - 1 || nums[mid] < nums[mid + 1])) {
            return mid;  // Found local minimum
        } else if (mid > 0 && nums[mid] > nums[mid - 1]) {
            right = mid - 1;  // Search in the left half
        } else {
            left = mid + 1;  // Search in the right half
        }
    }

    return left;  // or return right; since left == right
}
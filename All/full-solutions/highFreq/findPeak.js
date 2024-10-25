function findPeakElement(nums){
    let n = nums.length;
    if (n === 1) return 0; // Single element is always a peak
    if (nums[0] > nums[1]) return 0; // Check if the first element is a peak
    if (nums[n - 1] > nums[n - 2]) return n - 1; // Check if the last element is a peak

    let low = 1; // Start from the second element
    let high = n - 2; // End at the second last element

    while (low <= high) {  // Changed to low <= high
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid; // mid is a peak element
        } else if (nums[mid] < nums[mid - 1]) {
            high = mid - 1; // Peak is on the left side
        } else {
            low = mid + 1; // Peak is on the right side
        }
    }

    return -1; // This line is theoretically unreachable due to the checks above
}


let nums1 = [1, 1, 1, 1, 1, 5];
console.log(findPeakElement(nums1));  // Output: 5 (index of peak element, value 5)

let nums2 = [5, 1, 1, 1, 1, 1];
console.log(findPeakElement(nums2));  // Output: 0 (index of peak element, value 5)

let nums3 = [1, 1, 5, 1, 1];
console.log(findPeakElement(nums3))

let nums4 = [1, 2, 3, 1];
console.log(findPeakElement(nums4));  // Output: 2 (index of peak element, value 3)
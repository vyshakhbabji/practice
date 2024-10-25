function findMedianSortedArrays(nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;

    // Ensure nums1 is the smaller array
    if (n > m) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let low = 0, high = n;
    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((n + m + 1) / 2) - partitionX;

        let maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        let maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];

        let minX = partitionX === n ? Infinity : nums1[partitionX];
        let minY = partitionY === m ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((n + m) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted or something went wrong.");
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

const nums1 = [1, 2];
const nums2 = [3, 4];

console.log

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let sp = nums1.length - 1
    let i = m - 1, j = n - 1
    while (sp >= 0 && i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[sp] = nums1[i]
            i--
        } else {
            nums1[sp] = nums2[j]
            j--
        }
        sp--
    }

    while (sp >= 0 && j >= 0) {
        nums1[sp] = nums2[j]
        j--
        sp--
    }

    return nums1

};

Time complexity: O(m + n), where m is the number of elements in nums1 and n is the number of elements in nums2.
Space complexity: O(1), since the algorithm uses constant extra space and modifies nums1 in place.
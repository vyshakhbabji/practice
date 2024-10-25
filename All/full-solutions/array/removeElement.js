var removeElement = function(nums , val) {

    let l = 0 , r= 0

    while(r<nums.length) {
        if (nums[r] != val) {
            nums[l] = nums[r]
            l++
        }
        r++
    }

    return l+1
};

// Test cases
let nums1 = [3, 2, 2, 3];
let val1 = 3;
let len1 = removeElement(nums1, val1);
console.log(len1); // Output: 2
console.log(nums1.slice(0, len1)); // Output: [2, 2]
//
// let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
// let val2 = 2;
// let len2 = removeElement(nums2, val2);
// console.log(len2); // Output: 5
// console.log(nums2.slice(0, len2)); // Output: [0, 1, 3, 0, 4]
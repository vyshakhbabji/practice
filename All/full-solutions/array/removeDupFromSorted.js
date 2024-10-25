/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0, r = 0

    while (r<nums.length){

        if(nums[l]!==nums[r]){
            l++
            nums[l] = nums[r]
        }

        r++
    }
    return  l+1
};

// Test cases
let nums1 = [1, 1, 2];
let len1 = removeDuplicates(nums1);
console.log(len1); // Output: 2
console.log(nums1.slice(0, len1)); // Output: [1, 2]

let nums2 = [0,0,1,1,1,2,2,3,3,4];
let len2 = removeDuplicates(nums2);
console.log(len2); // Output: 5
console.log(nums2.slice(0, len2)); // Output: [0, 1, 2, 3, 4]

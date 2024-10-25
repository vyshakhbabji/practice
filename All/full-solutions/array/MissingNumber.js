/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let expected = n * (n+1 )/2
    let actualSum = nums.reduce((a,b)=>a+b)
    return expected-actualSum
};

// Test cases
let nums1 = [3, 0, 1];
console.log(missingNumber(nums1)); // Output: 2

let nums2 = [0, 1];
console.log(missingNumber(nums2)); // Output: 2

let nums3 = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums3)); // Output: 8

let nums4 = [0];
console.log(missingNumber(nums4)); // Output: 1

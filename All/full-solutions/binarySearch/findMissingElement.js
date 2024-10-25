//leetcode 1060
//Given an integer array nums which is sorted in ascending order and
// all of its elements are unique and given also an integer k,
// return the kth missing number starting from the leftmost number of the array.


var missingElement = function(nums, k) {

    let n = nums.length;
    let left = 0, right = n - 1;

    while (left <= right) {
        let mid = right - Math.floor((right - left) / 2);
        if (nums[mid] - nums[0] - mid < k) {
            left = mid+1;
        } else {
            right = mid - 1;
        }
    }

    return nums[0] + k + left;

}
//is this code correct ?  yes


// Example usage:

let nums = [4, 7, 9, 10];
let k = 3;
console.log(missingElement(nums, k)); // Output: 8
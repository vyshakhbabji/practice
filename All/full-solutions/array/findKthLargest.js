/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // const maxVal = Math.max(...nums);
    // const minVal = Math.min(...nums);
    // const range = maxVal - minVal + 1;
    // const count = new Array(range).fill(0);
    //
    // // Count the occurrences of each value
    // for (const num of nums) {
    //     count[num - minVal]++;
    // }
    //
    // // Iterate from the largest to the smallest value
    // let remaining = k;
    // for (let i = count.length - 1; i >= 0; i--) {
    //     remaining -= count[i];
    //     if (remaining <= 0) {
    //         return i + minVal;
    //     }
    // }

    // O(nlogn)

};
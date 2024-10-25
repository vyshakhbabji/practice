
// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0


var minSubArrayLen = function (target, nums) {

    //2pointer approach 

    let sum = 0
    let minLen = Infinity
    let l = 0
    for (let r = 0; r < nums.length; r++) {
        sum += nums[r]
        while (sum >= target) {
            minLen = Math.min(minLen, r - l + 1)
            sum -= nums[l]
            l++
        }
    }

    return minLen == Infinity ? 0 : minLen



    //return minimal length 
    //math.min(minlen , r-l+1)
};
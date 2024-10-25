function maxSubArray(nums){

    let runningsum = nums[0]
    let maxSum = -Infinity

    if(nums.length<=1) return runningsum

    for(let i = 1 ; i < nums.length ; i++){
        runningsum = Math.max(nums[i], runningsum+nums[i])
        maxSum = Math.max(runningsum , maxSum)
    }


    return maxSum

}

// Example usage:

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums)); // Output: 6

let nums2 = [1];
console.log(maxSubArray(nums2)); // Output: 1

let nums3 = [5,4,-1,7,8];
console.log(maxSubArray(nums3)); // Output: 23
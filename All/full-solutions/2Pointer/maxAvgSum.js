function findMaxAverage(nums, k) {
    let curSum = 0
    let left =0 , right = 0

    //move right pointer to k pos
    while(right<k){
        curSum += nums[right]
        right++
    }

    //save the first sum as max sum
    let maxSum = curSum

    // now move right to rigth and left to rigth by calculating sum
    while(right<nums.length){
        curSum+=nums[right] - nums[left]
        left++
        right++
        if(curSum>maxSum)
            maxSum=curSum
    }

    return maxSum/k
}

// Test cases
let nums1 = [1, 12, -5, -6, 50, 3];
let k1 = 4;
console.log(findMaxAverage(nums1, k1)); // Output: 12.75

let nums2 = [5, 5, 5, 5, 5];
let k2 = 1;
console.log(findMaxAverage(nums2, k2)); // Output: 5.0

let nums3 = [0, 4, 0, 3, 2];
let k3 = 1;
console.log(findMaxAverage(nums3, k3)); // Output: 4.0

let nums4 = [0, 1, 1, 3, 3];
let k4 = 2;
console.log(findMaxAverage(nums4, k4)); // Output: 3.0

function pivotIndex(nums){

    let leftSum = 0
    let rightSum = 0
    let totalSum = nums.reduce((a,b)=>a+b,0)
    let i =0

    while(i<nums.length){

        // based on Q ,The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the right of the index.
        // totalSum = rightsum + leftsum + num[i]
        // right sum = total sum -leftSum - num[i]
        rightSum = totalSum-leftSum-nums[i]

        if (leftSum === rightSum) return i

        leftSum += nums[i]

        i++
    }
    return -1

}


const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums)); // Output should be 3

// Additional test cases
const nums2 = [1, 2, 3];
console.log(pivotIndex(nums2)); // Output should be -1

const nums3 = [2, 1, -1];
console.log(pivotIndex(nums3)); // Output should be 0
function sortedSquare(nums){
    let l =0
    let r = nums.length-1
    let index  =  nums.length-1

    while(l<=r){
        let lsq = nums[l]*nums[l]
        let rsq  = nums[r] * nums[r]

        if(lsq<rsq){
            nums[index] = rsq
            r--
        }
        else{
            nums[index] = lsq
            l++
        }
        index--
    }
    return nums
}

// Test cases
let nums1 = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums1)); // Output: [0, 1, 9, 16, 100]

let nums2 = [-7, -3, 2, 3, 11];
console.log(sortedSquares(nums2)); // Output: [4, 9, 9, 49, 121]
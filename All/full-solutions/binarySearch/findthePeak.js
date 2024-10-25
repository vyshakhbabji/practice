//peak element is strictly greater elements than neighbours

function findPeakElement(nums) {
    let left = 0, right = nums.length - 1;
    while(left<right){
        let mid  = Math.floor((left+right)/2)

        if(nums[mid]<=nums[mid+1]){
            left = mid+1
        }
        else{
            right = mid
        }
    }
    return left // or right

}

// Example usage:
let nums1 = [1, 2, 3, 1];
console.log(findPeakElement(nums1)); // Output: 2 (index of peak element 3)

let nums2 = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(nums2)); // Output: 5 (index of peak element 6, although 1, 5 are also valid)

function findAllPeaks(nums){

    let res = []
    let n = nums.length

    for (let i = 0; i < nums.length-1; i++) {
        if(i===0 || nums[i]>nums[i-1] && (i ===n-1 || nums[i]> nums[i+1] ) ){
            res.push(i)
        }
    }
    return res
}
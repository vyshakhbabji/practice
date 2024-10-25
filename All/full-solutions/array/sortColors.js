/**
 * @param {number[]} nums
 * @return {void}
 */
var sortColors = function(nums) {


    // set low , mid to 0
    //set high to end
    //if [mid] =0  swap low mid incremnt both
    //if [mid]=1 increment mid
    //if [mid]=2  swap mid,high decrement high


    let low = 0,
    mid = 0
    high = nums.length-1;


    while(mid<=high){
        if(nums[mid]==1){
            mid++
        }
        else if(nums[mid]=== 0){
            [nums[low], nums[mid]] = [nums[mid], nums[low]]
            low++
            mid++
        }else if(nums[mid]===2){
            [nums[high], nums[mid]] = [nums[mid], nums[high]]
            high--
        }
    }
};

// Test cases
let nums1 = [2,0,2,1,1,0];
sortColors(nums1);
console.log(nums1); // Output: [0,0,1,1,2,2]

let nums2 = [2,0,1];
sortColors(nums2);
console.log(nums2); // Output: [0,1,2]

let nums3 = [0];
sortColors(nums3);
console.log(nums3); // Output: [0]

let nums4 = [1];
sortColors(nums4);
console.log(nums4); // Output: [1]

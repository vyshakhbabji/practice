/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    nums.sort((a,b)=>a-b)
    let closest = Infinity

    for(let i = 0 ; i< nums.length-1 ; i++){
        let l = i+1 , r  = nums.length-1
        while(l<r){
            let cursum = nums[i]+nums[r]+nums[l]

            if(Math.abs(cursum-target) < Math.abs(closest-target)){
                closest = cursum
            }

            if(cursum<target){
                l++
            }
            else if(cursum>target){
                r--
            }
            else {
                return cursum
            }
        }
    }
    return closest
};

// Test cases
let nums1 = [-1, 2, 1, -4];
let target1 = 1;
console.log(threeSumClosest(nums1, target1)); // Output: 2

let nums2 = [0, 0, 0];
let target2 = 1;
console.log(threeSumClosest(nums2, target2)); // Output: 0

let nums3 = [1, 1, 1, 1];
let target3 = 3;
console.log(threeSumClosest(nums3, target3)); // Output: 3

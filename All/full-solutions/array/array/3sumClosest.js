/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    nums.sort((a,b)=>a-b)
    let closest = Infinity

    for(let i = 0 ; i < nums.length ; i++){

        let curNum = nums[i]
        let l = i+1 , r = nums.length-1 

        // sliding window will start after num index until end 

        while(l<r){

            let cursum = curNum + nums[l]+nums[r]
           
            // check if closest is near to target or cursum near to target 
            if(Math.abs(cursum-target) <= Math.abs(closest-target )){
                closest = cursum 
            }


            if(cursum > target ){
                r--
            }
            else if (cursum<target){
                l++
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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes(nums, k) {
    let zcount = 0 
    let maxLen = 0 
    let l = 0 
    for(let r = 0 ; r <nums.length; r++){
        if(nums[r] === 0 ) zcount++

        while(zcount>k){
            if(nums[l]===0){
                zcount--
            }
            l++
        }

        maxLen = Math.max(maxLen , r-l+1)
    }

    return maxLen


}

// Example usage:
const nums = [1,1,1,0,0,0,1,1,1,1,0];
const k = 2;
console.log(longestOnes(nums, k)); // Output: 6

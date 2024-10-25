/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = bs(true)
    let last = bs(false)
    function bs(first){
        let low = 0 , high = nums.length - 1 
        let res = -1
        while(low<=high){
            let mid = Math.floor((low+high)/2)
            if(nums[mid] === target){
                res= mid
                if(first===true){
                    high=mid-1
                }else{
                    low = mid+1
                }
            }
            else if(nums[mid]<target){
                low = mid+1
            }else{
                high = mid-1 
            }
        }
        return res 
    }
    return first===-1?[-1,-1]: [first,last]
};

Conclusion:
Time complexity: O(log n) due to the two binary searches.
Space complexity: O(1), as the algorithm uses only constant space.
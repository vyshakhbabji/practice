var search = function(nums, target) {
    let low = 0 , high = nums.length-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid]=== target) return true 

        if(nums[low]===nums[mid] && nums[mid]===nums[high]){
            low++
            high--
        }
        else if( nums[low]<=nums[mid]){
            if(nums[low]<=target && target < nums[mid]){
                high= mid-1
            } else{
                low = mid+1
            }
        }else{
            if(nums[mid]<target && target<=nums[high]){
                low = mid+1
            }else{
                high = mid-1
            }
        }
    }

    return false 
};


O(n) with duplicates else O(logn)
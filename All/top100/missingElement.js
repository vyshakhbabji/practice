function missingElement(nums,k){
    let left= 0 ,  right = nums.length-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]-mid-nums[0] < k ){
            left = mid+1
        }else{
            right = mid
        }
    }
    return nums[0]+left+k-1
}

/*
nums = [4,7,9,10], k = 1
 */

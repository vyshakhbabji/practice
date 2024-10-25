function findPeak(nums){

    let l = 0 , r = nums.length-1
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid]<nums[mid+1]){
            l= mid+1
        }
        else{
            r=mid-1
        }
    }
    return l

}


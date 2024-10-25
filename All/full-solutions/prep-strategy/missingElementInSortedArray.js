var missingElement = function(nums, k) {

    //a[idx]-idx => a[mid] - mid - a[o] < k

    let l = 0 , r = nums.length-1

    while(l<=r){
        let m = Math.floor((l+r)/2)
        if(nums[m]-m-nums[0]<k){
            l = m+1
        }else{
            r=m-1
        }
    }

    return nums[0] + l + k -1



}




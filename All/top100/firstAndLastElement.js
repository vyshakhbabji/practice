function  firstAndLastElement(nums, k ){

    function binarySearch(first){
        let l = 0 , r = nums.length-1
        let res = -1
        while(l<=r){
            let mid = Math.floor((l+r)/2)
            if(nums[mid]===k){
                res = mid
                if(first){
                    r = mid-1
                }
                else{
                    l = mid+1
                }
            }
            else if(nums[mid]<k){
                l = mid+1
            }
            else{
                r = mid-1
            }
        }
        return res
    }


    let first  = binarySearch(true)
    let last  = binarySearch(false)

    return first === -1  ? [-1,-1]  : [first , last]

}

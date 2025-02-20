function threeSum(nums ) {

    let res = []
    nums.sort((a,b)=>a-b)
    for(let i = 0 ; i < nums.length ; i++){
        if(i>0 && nums[i] === nums[i-1]) continue
        let l = i + 1 , r = nums.length-1
        while(l<r){
            let sum = nums[i] + nums[l] + nums[r]
            if(sum<0) {
                l++
            }else if(sum>0){
                r--
            }
            else{
                res.push([nums[i], nums[l], nums[r]])

                while(l<r && nums[l] === nums[l+1]) l++
                while(l<r && nums[r] === nums[r-1]) r--

                l++
                r--
             }
        }
    }
    return res
}

// Example usage:
let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums)); // Output: [[-1, -1, 2], [-1, 0, 1]]

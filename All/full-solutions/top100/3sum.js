function threeSum(nums){

    nums.sort((a,b)=> a-b)
    let res = []

    for(let i = 0 ; i < nums.length ; i++){
        let left = i+1 , right = nums.length-1
        if(i>0 && nums[i] === nums[i-1]) continue
        while(left<right){
            let sum = nums[i]+ nums [left] + nums[right]
            if(sum < 0 ){
                left ++
            }else if(sum>0){
                right--
            }else{
                res.push([nums[i], nums[left],  nums[right]])
                while(left<right && nums[left] === nums[left+1]) left++
                while((left<right) && nums[right+1] === nums[right])right--
                left++
                right--
            }
        }
    }
    return res
}

//test cases

let nums1 = [-1,0,1,2,-1,-4];
console.log(threeSum(nums1)); //Output: [[-1,-1,2],[-1,0,1]]

let nums2 = [];
console.log(threeSum(nums2)); //Output: []

let nums3 = [0];
console.log(threeSum(nums3)); //Output: []

function canJump(nums){

    let lastpos = nums.length -1

    //if u can reach the lastpos from prev index +num at index  to last index ,
    // then lastindex is prev index
    for(let i = nums.length-1 ; i>=0 ; i--){
        if(i+nums[i] === lastpos){
            lastpos = i
        }
    }

    return lastpos === 0
}

let nums = [2,3,1,1,4]
console.log(canJump(nums)) // true
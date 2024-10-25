var findMissingRanges = function(nums, lower, upper) {

    let prev = lower- 1
    let cur  = lower
    let res = []
    for(let i =0 ; i<=nums.length; i++){

        if(i<nums.length){
            cur = nums[i]
        }else {
            cur = upper + 1
        }

        if(cur-prev>=2)
            res.push(format(prev+1,cur-1))

        prev = cur
    }
    return res
};

function format(start, end){
    if(start ===end ){
        return [start,start]
    }
    else{
        return [start,end]
    }

}


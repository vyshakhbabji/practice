var findMissingRanges = function(nums, lower, upper) {

    let prev= lower-1
    let res = []
    for(let i=0 ; i <= nums.length;  i ++){
        let  cur =  i<nums.length ? nums[i]: upper+1
        if(cur-prev > 1){
            res.push(format(prev+1, cur-1))
        }
        prev = cur
    }

    function format(start , end){
        if(start === end){
            return [start,start]
        }else{
            return [start,end]
        }
    }

    return res

};
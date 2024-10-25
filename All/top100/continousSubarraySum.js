var checkSubarraySum = function(nums, k) {
    let sum = 0
    let map = {}
    map[0] = -1

    for(let i = 0 ; i < nums.length ; i++){
        sum+=nums[i]
        if(k>0)sum=sum%k
        if(sum in map) {
            if (i- map[sum]  > 1) {
                return true
            }
        }
        else map[sum]=i
    }
    return false
};

/*
   nums = [23,2,4,6,7], k = 6
   map = {0:-1}

   i =0 ,  sum = 23   6>0 => sum%6 => 5   5 not in map => map = {0:-1, 5:0 ,
   i=1 .   sum = 5+2  6>0 = >sum%6 => 1   1 not in map => map = {0:-1, 5;0 , 1:1
   i=2 ,   sum = 1+4  6>0 => sum%6 => 5   5  in map  , index = 0  2-0 =2  -  found


 */
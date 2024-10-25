
//pseudoCode
// for each number , check if k-num[i] exists with abs(i-j)<k ...
//if exists return i,j
//if not add number and i value to the map


var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for (let i = 0; i < nums.length ; i++) {
        if( map.has(nums[i])  && Math.abs(map.get(nums[i]) - i ) <= k ){
            return true
        }
        else{
            map.set(nums[i],i)
        }

    }
    return false
};


const nums = [1,2,3,1,2,3], k = 2
console.log(containsNearbyDuplicate(nums,k))
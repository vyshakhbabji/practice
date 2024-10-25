
//pseudoCode
// for each number , check if k-num[i] exists with abs(i-j)<k ...
//if exists return i,j
//if not add number and i value to the map


var containsNearbyDuplicate = function(nums, k) {
   let map  = {}
   let i=0
   while(i<nums.length){
        if(map[nums[i]] === undefined) map[nums[i]]= i
        else{
            prevIdx = map[nums[i]]
            if(i -prevIdx<= k) return true

            
            //TODO : U need to update new index into map 
            // ======= IMPORTANT =======                
            map[nums[i]] = i  
        }
        i++
    }
    return false 
};


const nums = [1,0,1,1], k = 1
console.log(containsNearbyDuplicate(nums,k))
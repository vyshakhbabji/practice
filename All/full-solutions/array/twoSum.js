//pseudo code
//for each number , check if the complement exisits in the map
// if exits return indexes
// if donest exist add the number and its index to the map


var twoSum = function(nums, target) {
    let map={}

    for (let i = 0; i < nums.length; i++) {
        let complement = target-nums[i]
        if(map[complement]!=null){
            return [map[complement] +1, i+1]
        }
        else{
            map[nums[i]]=i
        }
    }
};

var sumSorted =function (nums,target){
    let i=0 , j = nums.length-1

    while(i<j){
        if(nums[i]+nums[j] > target){
            j-=1
        }
        else if(nums[i]+nums[j] < target){
                i+=1
        }
        else{
            return[i+1,j+1]
        }
    }

}

const nums = [2,7,11,15]
console.log(twoSum(nums, 9))
console.log(sumSorted(nums,9))
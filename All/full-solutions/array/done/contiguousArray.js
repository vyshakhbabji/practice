function findMaxLength(nums) {
    //The entire array has equal number of 0s and 1s.
    //treat 0 as -1 , so it becomes similar to 0 sum problem

    let map =  new Map()
    map.set(0,-1)
    maxLen = 0
    curSum= 0

    for(let i =0;i < nums.length; i++){
        curSum+= nums[i] === 0 ? -1 : 1
        if(map.has(curSum)){
            let curLen = i-map.get(curSum)
            maxLen = Math.max(maxLen, curLen)
        }
        else{
            map.set(curSum, i )
        }
    }
    return maxLen
}

// Example input
const nums = [0, 1];
console.log(findMaxLength(nums)); // Output should be 2

// Additional test cases
const nums2 = [0, 1, 0];
console.log(findMaxLength(nums2)); // Output should be 2

const nums3 = [0, 1, 1, 0, 1, 1, 1, 0];
console.log(findMaxLength(nums3)); // Output should be 4


//Dry run
/*
nums = [0, 1,1,0,1,1,1,0]
ind =   0  1 2 3 4 5 6 7

map = {0:-1}
maxLen = 0
curSum = 0

i=0
curSum = -1
map = {0:-1,-1:0}
maxLen = 0

i=1
curSum = 0
map = {0:-1,-1:0}
maxLen = 2

i=2
curSum = 1
map = {0:-1,-1:0,1:2}
maxLen = 2

i=3
curSum = 0
map = {0:-1,-1:0,1:2}
maxLen = 4

i=4
curSum = 1
map = {0:-1,-1:0,1:2}
maxLen = 4

i=5
curSum = 2
map = {0:-1,-1:0,1:2,2:5}
maxLen = 4

i=6
curSum = 3
map = {0:-1,-1:0,1:2,2:5,3:6}
maxLen = 4

i=7
curSum = 2
map = {0:-1,-1:0,1:2,2:5,3:6}

 */
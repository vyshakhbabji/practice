function SubArraSumEqualsK(nums, k) {

    let map={}
    map[0] =1
    let cur=0

    let totalCount= 0
    for(let i=0 ; i <nums.length; i++){
        cur+=nums[i]

        if((cur-k) in map){
            totalCount+= map[cur-k]
        }

        map[cur] = (map[cur]||0)+1
    }

    return totalCount

}

// Example input
const arr = [1, 1, 1];
const k = 2;
console.log(SubArraSumEqualsK(arr, k)); // Output should be 2

// Additional test cases
const arr2 = [1, 2, 3];
const k2 = 3;
console.log(SubArraSumEqualsK(arr2, k2)); // Output should be 2

const arr3 = [1, 2, 3, 4];
const k3 = 5;

console.log(SubArraSumEqualsK(arr3, k3)); // Output should be 2


// Time complexity: O(n)

// Space complexity: O(n)

//steps
// create a map with 0:1
// create a curSum and totalCount
// iterate through the array
// add the element to curSum
// check if curSum-k is in the map
// if it is add the value to totalCount
// add curSum to the map
// return totalCount


//whats this mmethod called - subarray sum equals k


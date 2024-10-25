function countHillValley(nums) {

    //simplfy the array by removing dups
    let simpleArray = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i+1]){
            simpleArray.push(nums[i])
        }
    }

    console.log(simpleArray)

    let count = 0

    for (let i = 1; i < simpleArray.length - 1; i++) {
        if (simpleArray[i] > simpleArray[i - 1] && simpleArray[i] > simpleArray[i + 1]) {
            count++; // Hill
        } else if (simpleArray[i] < simpleArray[i - 1] && simpleArray[i] < simpleArray[i + 1]) {
            count++; // Valley
        }
    }

    return count

}

// Example input
// const nums = [2, 4, 1, 1, 6, 5];
// console.log(countHillValley(nums)); // Output should be 3

// Additional test cases
const nums2 = [2, 4, 4, 1, 6, 5, 5];
console.log(countHillValley(nums2)); // Output should be 2

// const nums3 = [6, 6, 5, 5, 4, 4, 1];
// console.log(countHillValley(nums3)); // Output should be 0
//
// const nums4 = [1, 2, 3, 4, 5, 6];
// console.log(countHillValley(nums4)); // Output should be 0

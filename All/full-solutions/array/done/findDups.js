function findDuplicates(nums) {

    //use the index as a reference to the number and mark the number as negative

    let dup = []

    for(let i = 0 ; i < nums.length; i ++){
        let index = Math.abs(nums[i] ) -1

        if(nums[index]<0){
            dup.push(Math.abs(nums[i]))
        }
        else{
            nums[index] = -nums[index]
        }
    }

    return dup

}

// Example input
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums)); // Output should be [2, 3]

// Additional test cases
const nums2 = [1, 1, 2];
console.log(findDuplicates(nums2)); // Output should be [1]

const nums3 = [1];
console.log(findDuplicates(nums3)); // Output should be []

const nums4 = [2, 2, 3, 3, 4, 4, 5, 5];
console.log(findDuplicates(nums4)); // Output should be [2, 3, 4, 5]

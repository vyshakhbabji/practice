function findErrorNums(nums) {

    let dup = -1
    let mismatch = -1

    for(let i = 0 ; i<nums.length ; i ++){
        //get abs value
        let index = Math.abs(nums[i]) - 1  // 0 index

        //check if the value in  index of the abs is -
        if(nums[index]<0){ // if value is already negative , its been visited twice , do duplicate
            dup = Math.abs(nums[i])
        }
        else{
            nums[index] = - nums[index]
        }
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            mismatch = i+1  // all numbers will be -ve if visited
        }
    }

    return [dup,mismatch]

}

// Example input
const nums = [1, 2, 2, 4];
console.log(findErrorNums(nums)); // Output should be [2, 3]

// Additional test cases
const nums2 = [3, 2, 3, 4, 6, 5];
console.log(findErrorNums(nums2)); // Output should be [3, 1]

const nums3 = [1, 1];
console.log(findErrorNums(nums3)); // Output should be [1, 2]

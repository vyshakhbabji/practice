function findPeak(nums) {

    let  l = 0 , r = nums.length-1

    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid]<=nums[mid+1]){
            l=mid+1
        }
        else{
            r = mid-1
        }
    }

    return l

}

// Example input

const arr = [1, 2, 3, 1];
console.log(findPeak(arr)); // Output should be 2

// Additional test cases
const arr2 = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeak(arr2)); // Output should be 5

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findPeak(arr3)); // Output should be 9

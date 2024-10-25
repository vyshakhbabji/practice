//Find First and Last Position of Element in Sorted Array
function findFirst(a, target) {


}

function findLast(a, target) {


}

function searchRange(nums, target) {
    let first =  findFirst(nums,target)
    let last = findLast(nums,target)

    return [first,last]

}

// Example usage:
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target)); // Output: [3, 4]

target = 6;
console.log(searchRange(nums, target)); // Output: [-1, -1]


var findClosestElements = function(nums, k, x) {
    let l = 0, r = nums.length - k;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        // Compare the middle element with the element 'k' positions to the right
        if (x - nums[m] > nums[m + k] - x) {
            l = m + 1;
        } else {
            r = m-1;
        }
    }

    return nums.slice(l, l + k);
};


let arr = [1,2,3,4,5]
let k = 4
let x = 3

console.log(findClosestElements(arr,k,x)) // [1,2,3,4]
//
//
let arr2 = [1,2,3,4,5]
let k2 = 4
let x2 = -1

console.log(findClosestElements(arr2,k2,x2)) // [1,2,3,4]


let arr3 = [0,2,2,3,4,6,7,8,9,9]
let k3 = 4
let x3 = 5

console.log(findClosestElements(arr3,k3,x3)) // [2,3,4,5]
//


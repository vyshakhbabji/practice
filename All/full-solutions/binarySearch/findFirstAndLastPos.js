//Find First and Last Position of Element in Sorted Array
function findFirst(a, target) {
    let left  =  0 , right  = a.length , result = -1

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(a[mid]===target){
            result = mid //store index already found , reduce the window and see if u find again
            right = mid-1
        }else if(a[mid]<target){
            left = mid+1
        }else{
            right=mid-1
        }
    }
    return result

}

function findLast(a, target) {
    let left  =  0 , right  = a.length , res = -1

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(a[mid]===target){
            result = mid //store index already found , reduce the window and see if u find again
            left = mid+1
        }else if(a[mid]<target){
            left = mid+1
        }else{
            right=mid-1
        }
    }
    return result

}

function searchRange(nums, target) {

    let first = findFirst(nums, target);
    if (first === -1) {
        return [-1, -1];
    }

    let last = findLast(nums, target);

    return [first, last];
}

// Example usage:
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target)); // Output: [3, 4]

target = 6;
console.log(searchRange(nums, target)); // Output: [-1, -1]


/*
    1. Reverse entire array
    2. Reverse first k elements
    3. Reverse remaining elements

     [1.2.3.4.5]   k = 2      op = [4,5,1,2,3]

      initialize k = k % n

     step1:  Reverse all                    5,4,3,2,1
     step2.  Reverse first k ie 0 to k-1   4,5,3,2,1
     step3:  reverse k - n-1                4,5, 1,2,3

 */



function rotate(nums,k){

    let n = nums.length

    k= k%n

    function reverse(arr, start, end ){
        while(start<end){
            [arr[start],arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
    }

    reverse(nums, 0, n-1)
    reverse(nums, 0, k-1)
    reverse(nums,k,n-1)
}


// Example input
const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums); // Output should be [5, 6, 7, 1, 2, 3, 4]

// Additional test cases
const nums2 = [-1, -100, 3, 99];
rotate(nums2, 2);
console.log(nums2); // Output should be [3, 99, -1, -100]

const nums3 = [1, 2];
rotate(nums3, 3);
console.log(nums3); // Output should be [2, 1]

/**
 * Function to merge two sorted arrays nums1 and nums2 into nums1.
 * @param {number[]} nums1 - The first array with m initial elements followed by n zeros.
 * @param {number} m - The number of initial elements in nums1.
 * @param {number[]} nums2 - The second array with n elements.
 * @param {number} n - The number of elements in nums2.
 */
function merge(nums1, m, nums2, n) {

    let p1=m-1 , p2 = n-1

    let sp = m+n-1


    //lets do the comparison from reverse order
    //this is because the array merge should happen in place on nums1

    while(p1>=0 && p2>=0){
        if(nums1[p1]>nums2[p2]){
            nums1[sp] = nums1[p1]
            p1--
            sp--
        }
        else{
            nums1[sp] = nums2[p2]
            p2--
            sp--
        }
    }


    //handling remaining num1 elements not needed as its in place in correct order
    while (p2>=0){
        nums1[sp] = nums2[p2]
        p2--
        sp--
    }

    return nums1

}

// Test cases
let nums1, nums2, m, n;

// Example Case
nums1 = [1,2,3,0,0,0];
m = 3;
nums2 = [2,5,6];
n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1,2,2,3,5,6]

// Edge Case: nums2 is empty
nums1 = [1,2,3];
m = 3;
nums2 = [];
n = 0;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1,2,3]

// Edge Case: nums1 is empty (apart from placeholders)
nums1 = [0,0,0];
m = 0;
nums2 = [2,5,6];
n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [2,5,

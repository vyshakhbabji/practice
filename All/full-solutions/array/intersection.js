var intersect = function(nums1, nums2) {

    let count = {}
    let res = []

    for(let num of nums1){
        count[num] = (count[num] || 0) + 1;

    }

    console.log(count)

    for (let m of nums2){
        if(count[m]>0){
            res.push(m)
            count[m]--
        }
    }
    return res
};

// Example input
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersect(nums1, nums2)); // Output should be [2, 2]

// Additional test cases
const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];
console.log(intersect(nums3, nums4));
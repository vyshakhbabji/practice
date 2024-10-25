var intersect = function(nums1, nums2) {
    let map = {};
    let result = [];

    // Build the frequency map for nums1
    for (let num of nums1) {
        if (map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }

    // Check nums2 against the map and build the result
    for (let num of nums2) {
        if (map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    }

    return result;
};


// if array sorted  2PT 

var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let i = 0, j = 0;
    let result = [];

    // Use two pointers to find the intersection
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};


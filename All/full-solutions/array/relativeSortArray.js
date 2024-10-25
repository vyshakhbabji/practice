/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {

    let map = {}
    // Count the occurrences of each element in arr1
    for (let i = 0; i < arr1.length; i++) {
        map[arr1[i]] = (map[arr1[i]] || 0) + 1;
    }

    let res = [];

    // Add elements according to the order in arr2
    for (let n of arr2) {
        while (map[n] > 0) {
            res.push(n);
            map[n]--;
        }
    }


    // Collect remaining elements not in arr2
    let remaining = [];
    for (let k of Object.keys(map)) {
        while (map[k] > 0) {
            remaining.push(parseInt(k));
            map[k]--;
        }
    }

    // Sort remaining elements and add to the result
    remaining.sort((a, b) => a - b);

    res = res.concat(remaining);

    return  res




};

// Test cases
let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];
console.log(relativeSortArray(arr1, arr2)); // Output: [2,2,2,1,4,3,3,9,6,7,19]

let arr1_2 = [28,6,22,8,44,17], arr2_2 = [22,28,8,6];
console.log(relativeSortArray(arr1_2, arr2_2)); // Output: [22,28,8,6,17,44]

function mergeSortedArrays(arr1, arr2, arr3) {
    let i = 0, j = 0, k = 0;
    let result = [];
    let lastAdded = null;

    while (i < arr1.length || j < arr2.length || k < arr3.length) {
        let val1 = i < arr1.length ? arr1[i] : Infinity;
        let val2 = j < arr2.length ? arr2[j] : Infinity;
        let val3 = k < arr3.length ? arr3[k] : Infinity;

        let minVal = Math.min(val1, val2, val3);

        if (minVal !== lastAdded) {
            result.push(minVal);
            lastAdded = minVal;
        }

        if (minVal === val1) {
            i++;
        } else if (minVal === val2) {
            j++;
        } else {
            k++;
        }
    }

    return result;
}

// Example usage:
let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6];
let arr3 = [0, 4, 5, 6];
console.log(mergeSortedArrays(arr1, arr2, arr3)); // Output: [0, 1, 2, 3, 4, 5, 6]

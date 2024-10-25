function mergeThreeSortedArrays(arr1, arr2, arr3) {
    let i = 0, j = 0, k = 0;
    let result = [];
    let lastAdded = null;  // To keep track of the last added value to avoid duplicates

    // While there are elements in any of the arrays
    while (i < arr1.length || j < arr2.length || k < arr3.length) {
        let a = i < arr1.length ? arr1[i] : Infinity;
        let b = j < arr2.length ? arr2[j] : Infinity;
        let c = k < arr3.length ? arr3[k] : Infinity;

        // Find the minimum value among the three arrays
        let minValue = Math.min(a, b, c);

        // Only add to result if it's not a duplicate
        if (minValue !== lastAdded) {
            result.push(minValue);
            lastAdded = minValue;  // Update lastAdded
        }

        // Increment the pointer for the array that had the minimum value
        if (minValue === a) i++;
        else if (minValue === b) j++;
        else if (minValue === c) k++;
    }

    return result;
}

// Example usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 3, 6, 8];
const arr3 = [0, 3, 4, 10];

console.log(mergeThreeSortedArrays(arr1, arr2, arr3));

// Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10]

//Time complexity: O(n), where n is the total number of elements in the three arrays combined. We iterate through all the elements once.
//Space complexity: O(n), where n is the total number of elements in the three arrays combined. We store the merged array in the result array.
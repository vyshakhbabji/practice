function countUniqueElements(arr) {
    // Helper function to find the next unique element's index
    function findNextUniqueIndex(start) {
        let left = start;
        let right = arr.length - 1;

        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (arr[mid] === arr[start]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    let count = 0;
    let i = 0;

    while (i < arr.length) {
        count++; // Increment count for each unique element found
        i = findNextUniqueIndex(i); // Move to the next unique element's index
    }

    return count;
}

// Example usage
const arr = [1, 1, 1, 1, 2, 2, 2, 2, 5, 5, 5, 7, 7, 8, 8, 10];
const output = countUniqueElements(arr);
console.log(output);  // Output: 6

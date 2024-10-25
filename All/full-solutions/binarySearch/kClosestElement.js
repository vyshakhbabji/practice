function findClosestElement(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    // Perform binary search to find the closest position or insertion point
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= x) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    // Edge cases handling
    if (left === 0) return arr[0];
    if (left === arr.length) return arr[arr.length - 1];

    // Compare the distances of the element at left and its left neighbor
    let leftDiff = Math.abs(arr[left] - x);
    let leftNeighborDiff = Math.abs(arr[left - 1] - x);

    if (leftDiff < leftNeighborDiff) {
        return arr[left];
    } else {
        return arr[left - 1];
    }
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
let x = 3;
console.log(findClosestElement(arr, x)); // Output: 3

arr = [1, 2, 3, 4, 5];
x = 6;
console.log(findClosestElement(arr, x)); // Output: 5

arr = [1, 2, 3, 4, 5];
x = 2;
console.log(findClosestElement(arr, x)); // Output: 2

arr = [1, 2, 3, 4, 5];
x = -1;
console.log(findClosestElement(arr, x)); // Output: 1

arr = [1, 3, 5, 7, 9];
x = 4;
console.log(findClosestElement(arr, x)); // Output: 3

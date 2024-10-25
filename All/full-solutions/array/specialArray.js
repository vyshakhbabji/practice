function specialArray(nums) {
    const counts = new Array(101).fill(0);

    // Count the frequency of each number, capping at 100
    for (let num of nums) {
        counts[Math.min(num, 100)]++;
    }

    // Calculate the cumulative counts from right to left
    for (let i = 99; i >= 0; i--) {
        counts[i] += counts[i + 1];
    }

    // Check for the special condition
    for (let x = 0; x <= 100; x++) {
        if (counts[x] === x) {
            return x;
        }
    }

    return -1;
}

// Test cases
console.log(specialArray([3, 5, 2, 3, 2, 7])); // Expected output: 3
console.log(specialArray([1, 2, 3, 4])); // Expected output: 2
console.log(specialArray([0, 0])); // Expected output: -1
console.log(specialArray([0, 4, 3, 0, 4])); // Expected output: 3
console.log(specialArray([5, 5, 5, 5, 5])); // Expected output: 5
console.log(specialArray([100, 100, 100, 100])); // Expected output: 4

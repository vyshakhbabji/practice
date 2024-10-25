function isStrobogrammatic(num) {
    const strobogrammaticPairs = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        let leftChar = num[left];
        let rightChar = num[right];

        // Check if the left and right characters form a valid strobogrammatic pair
        if (!(leftChar in strobogrammaticPairs
            && strobogrammaticPairs[leftChar] === rightChar)) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// Example usage:
console.log(isStrobogrammatic("69")); // Output: true
console.log(isStrobogrammatic("88")); // Output: true
console.log(isStrobogrammatic("962")); // Output: false
console.log(isStrobogrammatic("1")); // Output: true

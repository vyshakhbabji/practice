function canPermutePalindrome(s) {
    let frequency = {};

    for (let char of s) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    let oddCount = 0;
    for (let count of Object.values(frequency)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
}

// Example usage:
console.log(canPermutePalindrome("code"));   // Output: false
console.log(canPermutePalindrome("aab"));    // Output: true
console.log(canPermutePalindrome("carerac"));// Output: true

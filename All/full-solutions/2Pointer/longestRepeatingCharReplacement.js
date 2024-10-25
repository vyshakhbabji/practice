function characterReplacement(s, k) {
    const count = new Array(26).fill(0);
    let left = 0;
    let maxCount = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const index = s.charCodeAt(right) - 'A'.charCodeAt(0);
        count[index]++;
        maxCount = Math.max(maxCount, count[index]);

        // Current window size is right - left + 1
        // If the number of characters to replace is more than k, shrink the window
        if (right - left + 1 - maxCount > k) {
            const leftIndex = s.charCodeAt(left) - 'A'.charCodeAt(0);
            count[leftIndex]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
const s = "AABABBA";
const k = 1;
console.log(characterReplacement(s, k)); // Output: 4

const reorganizeString = (s) => {
    // Step 1: Create a frequency map
    const freqMap = {};
    for (let c of s) {
        freqMap[c] = (freqMap[c] || 0) + 1;
    }

    // Step 2: Sort characters by frequency in descending order
    const sortedChar = Object.entries(freqMap).
                        sort((a, b) => b[1] - a[1]);

    // Step 3: Check if the most frequent character exceeds half the length of the string
    let maxFreq = sortedChar[0][1];
    if (maxFreq > Math.floor((s.length + 1) / 2)) {
        return "";
    }

    // Step 4: Initialize an array to store the result
    let res = Array(s.length);

    // Step 5: Fill even indices first, then odd indices
    let index = 0;
    for (let [char, freq] of sortedChar) {
        for (let i = 0; i < freq; i++) {
            res[index] = char;
            index += 2;
            if (index >= s.length) {
                index = 1;
            }
        }
    }

    // Step 6: Join the array to form the reorganized string
    return res.join("");

};

// Example usage
// Edge case: Empty string
console.log(reorganizeString(""));  // Output: ""

// Edge case: Single character
console.log(reorganizeString("a"));  // Output: "a"

// Edge case: All characters same
console.log(reorganizeString("aaaa"));  // Output: ""

// Edge case: Characters with equal frequency
console.log(reorganizeString("aabb"));  // Output: "abab" or "baba"

// Edge case: String length of 1
console.log(reorganizeString("x"));  // Output: "x"
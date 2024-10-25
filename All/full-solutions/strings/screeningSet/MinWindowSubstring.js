function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) return "";

    let tCount = {};
    let windowCount = {};

    for (let char of t) {
        tCount[char] = (tCount[char] || 0) + 1;
    }

    let required = Object.keys(tCount).length;
    let left = 0;
    let right = 0;
    let formed = 0;
    let minLength = Infinity;
    let minLeft = 0;

    while (right < s.length) {
        let char = s[right];
        windowCount[char] = (windowCount[char] || 0) + 1;

        if (tCount[char] && windowCount[char] === tCount[char]) {
            formed++;
        }

        while (left <= right && formed === required) {
            char = s[left];

            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minLeft = left;
            }

            windowCount[char]--;
            if (tCount[char] && windowCount[char] < tCount[char]) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLength === Infinity ? "" : s.substring(minLeft, minLeft + minLength);
}

// Example usage:
const s = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindow(s, t)); // Output: "BANC"

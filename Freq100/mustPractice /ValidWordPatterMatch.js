var patternMatchIterative = function (word, pattern) {

    function isDigit(c) {
        return c >= '0' && c <= '9';
    }

    let i = 0, j = 0;
    let lastStarIndex = -1;  // Track the position of the last seen '*'
    let lastWordIndex = -1;  // Track where we were in the word when we saw the '*'

    while (i < word.length) {
        // Handle the case where pattern character is a number (abbreviation)
        if (j < pattern.length && isDigit(pattern[j])) {
            if (pattern[j] === '0') return false; // Abbreviations cannot start with '0'

            let num = 0;
            while (j < pattern.length && isDigit(pattern[j])) {
                num = num * 10 + parseInt(pattern[j]);
                j++;
            }
            i += num;  // Skip 'num' characters in the word
        }
        // Handle wildcard '*' (NEW BLOCK)
        else if (j < pattern.length && pattern[j] === '*') {
            lastStarIndex = j;   // Record the position of the '*'
            lastWordIndex = i;   // Record the position in the word where '*' is applied
            j++;                 // Move to the next pattern character after '*'
        }
        // If characters match, move both pointers forward
        else if (j < pattern.length && word[i] === pattern[j]) {
            i++;
            j++;
        }
        // If no match, backtrack to the last seen '*' (if any) (NEW BLOCK)
        else if (lastStarIndex !== -1) {
            j = lastStarIndex + 1;  // Reset pattern index to one character after '*'
            lastWordIndex++;        // Try matching one more character in the word
            i = lastWordIndex;      // Continue from the next character in the word
        }
        // No match and no '*' to backtrack to
        else {
            return false;
        }
    }

    // After exiting the loop, ensure any remaining pattern characters are all '*'
    while (j < pattern.length && pattern[j] === '*') {
        j++;
    }

    return j === pattern.length;  // Return true if we've consumed the entire pattern
};

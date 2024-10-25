function minWindow(S, T) {
    let sLen = S.length;
    let tLen = T.length;
    let minLength = Infinity;
    let start = -1;

    for (let i = 0; i < sLen; i++) {
        // Find the start of the potential window
        if (S[i] === T[0]) {
            let j = 0;
            let k = i;

            // Forward pass to see if we can match the entire T
            while (k < sLen && j < tLen) {
                if (S[k] === T[j]) {
                    j++;
                }
                k++;
            }

            // If we have matched all characters of T
            if (j === tLen) {
                // Backward pass to minimize the window
                k--; // Move k back to the last matching position
                j--; // Move j to the last character of T
                while (j >= 0) {
                    if (S[k] === T[j]) {
                        j--;
                    }
                    k--;
                }

                k++; // k was decremented one extra time, so we correct it

                // Update the minimum length window if this one is smaller
                if (minLength > i - k + 1) {
                    minLength = i - k + 1;
                    start = k;
                }
            }
        }
    }

    return start === -1 ? "" : S.substr(start, minLength);
}

// Example usage:
const S = "abcdebdde";
const T = "bde";
console.log(minWindow(S, T)); // Output: "bcde"

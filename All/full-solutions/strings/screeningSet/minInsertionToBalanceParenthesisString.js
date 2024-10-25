function minInsertions(s) {
    let open = 0;
    let insertions = 0;
    let i = 0;

    while (i < s.length) {
        if (s[i] === '(') {
            open++;
        } else {
            // If it's a single ')', and the next character isn't ')'
            if (i + 1 < s.length && s[i + 1] === ')') {
                i++; // Skip the next ')'
            } else {
                insertions++; // We need one more ')'
            }

            // Close one '('
            if (open > 0) {
                open--;
            } else {
                insertions++; // If there are no unmatched '(', we need an extra '('
            }
        }
        i++;
    }

    // Each unmatched '(' needs two ')'
    insertions += 2 * open;

    return insertions;
}

// Example usage:
console.log(minInsertions("(()))")); // Output: 1
console.log(minInsertions("())"));   // Output: 0
console.log(minInsertions("))())(")); // Output: 3
console.log(minInsertions("((((((")); // Output: 12
console.log(minInsertions(")))))))")); // Output: 5

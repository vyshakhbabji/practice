function removeInvalidParentheses(s) {
    // Helper function to check if the string is valid
    function isValid(str) {
        let count = 0;
        for (let char of str) {
            if (char === '(') {
                count++;
            } else if (char === ')') {
                count--;
            }
            if (count < 0) return false; // More closing than opening
        }
        return count === 0; // All parentheses are balanced
    }

    let result = [];
    let queue = [s];
    let visited = new Set();
    let found = false;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = new Set();

        for (let i = 0; i < levelSize; i++) {
            let str = queue.shift();

            if (isValid(str)) {
                result.push(str);
                found = true;
            }

            if (found) continue;

            for (let j = 0; j < str.length; j++) {
                if (str[j] !== '(' && str[j] !== ')') continue;

                let nextStr = str.slice(0, j) + str.slice(j + 1);

                if (!visited.has(nextStr)) {
                    visited.add(nextStr);
                    currentLevel.add(nextStr);
                }
            }
        }

        if (found) break;

        queue = Array.from(currentLevel);
    }

    return result.length === 0 ? [""] : result;
}

// Example usage:
console.log(removeInvalidParentheses("()())()")); // Output: ["()()()", "(())()"]
console.log(removeInvalidParentheses("(a)())()")); // Output: ["(a)()()", "(a())()"]
console.log(removeInvalidParentheses(")(")); // Output: [""]

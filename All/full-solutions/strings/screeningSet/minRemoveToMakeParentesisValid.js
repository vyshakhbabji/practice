function minRemoveToMakeValid(s) {
    let stack = [];
    let sArray = s.split('');

    // First pass: remove all invalid closing brackets
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] === '(') {
            stack.push(i);
        } else if (sArray[i] === ')') {
            if (stack.length > 0) {
                stack.pop(); // Found a matching pair, remove from stack
            } else {
                sArray[i] = ''; // Mark this unmatched closing bracket for removal
            }
        }
    }

    // Second pass: remove all unmatched opening brackets
    while (stack.length > 0) {
        sArray[stack.pop()] = ''; // Mark this unmatched opening bracket for removal
    }

    return sArray.join('');
}

// Example usage:
console.log(minRemoveToMakeValid("lee(t(c)o)de)")); // Output: "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d"));       // Output: "ab(c)d"
console.log(minRemoveToMakeValid("))(("));          // Output: ""
console.log(minRemoveToMakeValid("(a(b(c)d)"));     // Output: "a(b(c)d)"

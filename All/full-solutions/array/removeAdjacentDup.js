function removeDuplicates(s) {
    let stack = [];

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}

// Example usage:
console.log(removeDuplicates("abbaca")); // Output: "ca"
console.log(removeDuplicates("azxxzy")); // Output: "ay"

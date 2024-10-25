function removeDuplicates(s, k) {
    let stack = [];  // 2d stack array to store the character and its count

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1]++;

            // If the count reaches k, pop the stack
            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);// stack = [['d', 1], ['e', 3], ['b', 3], ['c', 3], ['d', 1], ['a', 2]]
        }
    }

    // Rebuild the string from the stack
    let result = '';
    for (let [char, count] of stack) {
        result += char.repeat(count);
    }

    return result;
}

// Example usage:
console.log(removeDuplicates("abcd", 2));      // Output: "abcd"
console.log(removeDuplicates("deeedbbcccbdaa", 3)); // Output: "aa"
console.log(removeDuplicates("pbbcggttciiippooaais", 2)); // Output: "ps"




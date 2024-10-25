//abbba

function removeAdj(s) {
    let stack = [];
    let i = 0;

    // Iterate through the string
    while (i < s.length) {
        // If the stack is not empty and the current character matches the top of the stack
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            // Remove the matching character from the stack
            stack.pop();
            i++;
        } else if (i < s.length - 1 && s[i] === s[i + 1]) {  // eg: aa or bb from aabbaa
            // Skip over adjacent identical characters
            while (i < s.length - 1 && s[i] === s[i + 1]) {
                i++;
            }
            i++;
        } else {
            // Add the current character to the stack
            stack.push(s[i]);
            i++;
        }
    }
    return stack.join("");
}

let input = "abcda"
console.log("1",removeAdj(input))

let input3 = "aaaaa";
console.log("2",removeAdj(input3));  // Expected output: "a"
// Explanation: All consecutive duplicates are removed, leaving just "a".

let input5 = "aabbaa";
console.log("3",removeAdj(input5));  // Expected output: ""
// Explanation: 'aa' and 'bb' are removed, and then the remaining 'aa' is also removed, resulting in an empty string.



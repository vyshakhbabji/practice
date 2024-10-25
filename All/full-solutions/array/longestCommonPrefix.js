function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    // Start with the first string as the basis for comparison
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;

        // Compare the prefix with the current string character by character
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }

        // Reduce the prefix to the common part found so far
        prefix = prefix.substring(0, j);

        // If the prefix becomes empty, there is no common prefix
        if (prefix === "") return "";
    }

    return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower","flow","flight"]));  // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));     // Output: ""
console.log(longestCommonPrefix(["interspecies","interstellar","interstate"])); // Output: "inters"

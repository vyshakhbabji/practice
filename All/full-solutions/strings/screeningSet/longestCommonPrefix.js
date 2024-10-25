function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";  // If the array is empty, return an empty string

    let prefix = strs[0];  // Assume the first string is the prefix

    for (let i = 1; i < strs.length; i++) {
        let wordToCompare = strs[i];  // Store the current string in a variable
        let j = 0;

        // Compare the prefix with the current word character by character
        while (j < prefix.length && j < wordToCompare.length && prefix[j] === wordToCompare[j]) {
            j++;
        }

        // Shorten the prefix to the matching portion
        prefix = prefix.substring(0, j);

        // If the prefix is empty, there is no common prefix
        if (prefix === "") return "";
    }

    return prefix;  // Return the longest common prefix
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));  // Output: ""


// alternate approach


// can it handle single string in array
// can it handle empty array

function longestCommonPrefix(strs) {
    if(strs.length===0) return ""
    let prefix = strs[0]
    for(let i = 0 ; i<prefix.length ; i++){
        for(let s of strs){
            if(i===s.length-1 || s[i]!==prefix[i]){
                return prefix.substring(0,i)
            }
        }
    }
    return prefix
}

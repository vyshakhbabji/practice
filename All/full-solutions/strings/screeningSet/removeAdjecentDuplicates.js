function removeDuplicates(s) {

    let stack  = []

    let i = 0

    while(i<s.length){
        if(stack.length>0  && stack[stack.length-1] === s[i]){
            stack.pop()
        }
        else{
            stack.push(s[i])
        }
        i++
    }

    return stack.join('')
}

// Example usage:
console.log(removeDuplicates("abbaca")); // Output: "ca"
console.log(removeDuplicates("azxxzy")); // Output: "ay"
console.log(removeDuplicates("aabbccddeeff")); // Output: ""
console.log(removeDuplicates("abcddcba")); // Output: ""
console.log(removeDuplicates("abcd")); // Output: "abcd"

function findMaxRepeatingSubstrings(s){

    let maxLen = 0

    let map = {}
    let curChar = s[0]

    let l=0 , r = 0

    while(r<s.length){
        let curLen = 0
        while(r<s.length && s[l]===s[r]){
            r++
            curLen++
        }

        if(!map[curLen]){
            map[curLen] = []
        }

        map[curLen].push(s.substring(l,r))
        maxLen = Math.max(curLen,maxLen)
        l=r

    }

    console.log(map)

    return map[maxLen]


}


// Example usage:
console.log(findMaxRepeatingSubstrings("aaabbbcccc")); // Output: ["cccc"]
// console.log(findMaxRepeatingSubstrings("abcd")); // Output: ["a", "b", "c", "d"]
// console.log(findMaxRepeatingSubstrings("aabbcc")); // Output: ["aa", "bb", "cc"]
// console.log(findMaxRepeatingSubstrings("aaabbbccc")); // Output: ["aaa", "bbb", "ccc"]
// console.log(findMaxRepeatingSubstrings("")); // Output: []
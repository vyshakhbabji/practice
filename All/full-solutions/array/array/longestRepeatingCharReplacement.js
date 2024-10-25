function characterReplacement(s, k) {
   
    let count = {}
    let maxLen = 0
    let  l = 0 , r = 0

    let maxCount = 0

    while(r<s.length){
        //check if count has it , if not add it
        count[s[r]] = (count[s[r]] || 0) + 1
        if(s[r]!==s[l]){
            //until u find s[l] === s[r]  continue l++
            maxCount = Math.max(maxCount , count[s[r]])
            if(maxCount > k ){
                while(r<s.length && s[l]!== s[r]){

                        count[s[l]]--
                        l++
                }
            }
        }

        console.log(count)
        maxLen = Math.max(maxLen, r-l+1)
        r++
    }
    return maxLen
}

// Example usage:
const s = "AABABBA";
const k = 1;
console.log(characterReplacement(s, k)); // Output: 4

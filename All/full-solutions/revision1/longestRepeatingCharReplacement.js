function longestRepeatingCharReplacement(s , k ){

    let left = 0;
    let right = 0;
    let maxCount = 0;
    let maxLength = 0;
    let map = {};

    while(right < s.length){
        let char = s[right];
        map[char] = map[char] ? map[char] + 1 : 1;
        maxCount = Math.max(maxCount, map[char]);

        if(right - left + 1 - maxCount > k){
            let leftChar = s[left];
            map[leftChar] = map[leftChar] - 1;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
}


const  s = "ABAB"
console.log(longestRepeatingCharReplacement(s))
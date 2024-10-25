function isAlienSorted(words, order) {

    const charOrder = {}

    for(let i = 0 ;  i<order.length ; i++){
        charOrder[order[i]] = i
    }

    for (let i = 0 ; i <words.length-1; i++){

        let word1 = words[i] , word2 = words[i+1]
        let minLen = Math.min(word1.length , word2.length)
        let j = 0
        while(j < minLen){

            if(charOrder[word1[j]] > charOrder[word2[j]]){
                return false
            }else if (charOrder[word1[j]] < charOrder[word2[j]])
            {
                break;
            }
            j++
        }

        //check prefix case if word1 longer than word2
        if(minLen ===  j && word1.length > word2.length)
            return false
    }

    return  true

}

// Example usage:
console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); // Output: true
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")); // Output: false
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")); // Output: false

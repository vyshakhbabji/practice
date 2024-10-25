var isAlienSorted = function(words, order) {

    let charOrderMap={}
    let idx= 0
    for(let o of order){
        charOrderMap[o]=idx
        idx++
    }

    for(let i = 0 ; i < words.length-1 ; i++){
        let word1 = words[i]
        let word2 = words[i+1]

        let minLen = Math.min(word1.length, word2.length)
        let j=0
        while(j<minLen){
            if(charOrderMap[word1[j]] > charOrderMap[word2[j]]) return false
            if(charOrderMap[word1[j]] < charOrderMap[word1[j]]) break
            j++
        }
        if(minLen===j && word1.length > word2.length) return false
    }
    return true
}
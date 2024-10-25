/*
We are given n different types of stickers. Each sticker has a lowercase English word on it.

You would like to spell out the given string target by cutting individual letters from your collection of stickers and rearranging them. You can use each sticker more than once if you want, and you have infinite quantities of each sticker.

Return the minimum number of stickers that you need to spell out target. If the task is impossible, return -1.

Note: In all test cases, all words were chosen randomly from the 1000 most common US English words, and target was chosen as a concatenation of two random words.
*/


const minStickers = function (stickers, target) {
    let memo = {}

    //array of char counts 
    let countChars = (str) => {
        let count = Array(26).fill(0)
        for (let c of str) {
            count[c.charCodeAt(0) - 97]++
        }
        return count
    }

    const stickerCount = stickers.map(countChars)

    function dfs(target) {

        if (target.length === 0) return 0
        if (target in memo) return memo[target]

        let res = Infinity

        const targetCount = countChars(target) // build target count array 

        for (let sticker of stickerCount) {
            if (sticker[target.charCodeAt(0) - 97] === 0) continue
            // first letter of target not in the sticker , skip it 

            let newTarget = ""
            for (let i = 0; i < 26; i++) {

                if (targetCount[i] > sticker[i])
                    //add all chars to target  - whats available in the sticker[i]
                    // orig target deed ==> if e is in sticker then dde  will be new target
                    // convert count arr to char arr

                    newTarget += String.fromCharCode(97 + i).repeat(targetCount[i] - sticker[i])

            }

            let subProblem = dfs(newTarget)
            if (subProblem !== Infinity) {
                res = Math.min(res, 1 + subProblem)
            }
        }



        memo[target] = res
        return res


    }

    let result = dfs(target);
    return result === Infinity ? -1 : result;
};













/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
    let memo = {}

    function freqMapCount(s) {
        let map = {}
        for (let c of s) {
            map[c] = (map[c] || 0) + 1
        }
        return map
    }

    let stickerCounter = stickers.map(freqMapCount)

    function dfs(target) {
        if (target.length === 0) return 0
        if (target in memo) return memo[target]
        let res = Infinity
        let targetCount = freqMapCount(target)

        for (let sticker of stickerCounter) {
            if (!(target[0] in sticker)) continue
            let newTarget = ""

            for (let [k, v] of Object.entries(targetCount)) {
                let char = k
                let count = v

                let remaining = count - (sticker[char] || 0) // check if char is in stirckers , if yes reduce count in target 
                if(remaining > 0){
                    newTarget+=char.repeat(remaining)
                }
            }

            let subproblem = dfs(newTarget)
            if(subproblem!==Infinity){
                res=Math.min(res, 1+subproblem)
            }
        }



        memo[target] = res
        return res
    }


    let res = dfs(target)
    return res === Infinity ? -1 : res

};
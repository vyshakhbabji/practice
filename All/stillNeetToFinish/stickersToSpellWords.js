const minStickers = function (stickers, target) {

  /*
   Steps:
   1. Create a memo object to store the target and its minimum stickers
    2. Create a function to count the characters in a string
    3. Create an array of sticker counts
    4. Create a function to solve the problem using dfs
    5. If target.length is empty return 0
    6. If target is in memo return the value
    7. Set res to Infinity
    8. Create a target count array
    9. Loop through the sticker count array
    10. If the first letter of the target is not in the sticker, skip it
    11. Create a new target string
    12. Loop through the target count array
    13. If target count is greater than sticker count, add all characters to the new target
    14. Create a subproblem variable
    15. If subproblem is not Infinity, set res to the minimum of res and 1 + subproblem
    16. Set memo[target] to res
    17. Return res
    18. Set result to dfs(target)
    19. Return result if it is not Infinity, otherwise return -1

   */


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


// Example usage:
console.log(minStickers(["with", "example", "science"], "thehat")); // Output: 3
console.log(minStickers(["notice", "possible"], "basicbasic")); // Output: -1



var minStickers = function (stickers, target) {
    const memo = {};
    const stickerCounts = stickers.map(sticker => {
        const count = {};
        for (let char of sticker) {
            if (!count[char]) count[char] = 0;
            count[char]++;
        }
        return count;
    });

    const dp = (target) => {
        if (target === "") return 0;
        if (memo[target] !== undefined) return memo[target];
        let min = Infinity;
        const targetCount = {};
        for (let char of target) {
            if (!targetCount[char]) targetCount[char] = 0;
            targetCount[char]++;
        }

        for (let sticker of stickerCounts) {
            if (!sticker[target[0]]) continue; // Optimization: skip if sticker doesn't contain the first char of target
            let newTarget = "";
            for (let char in targetCount) {
                const need = targetCount[char] - (sticker[char] || 0);
                if (need > 0) newTarget += char.repeat(need);
            }
            const res = dp(newTarget);
            if (res !== -1) min = Math.min(min, 1 + res);
        }
        memo[target] = min === Infinity ? -1 : min;
        return memo[target];
    };

    return dp(target);
};
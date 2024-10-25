/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return []
    let map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    let res = []

    function dfs(index, cur) {
        if (cur.length === digits.length) {
            res.push(cur.join(""))
            return
        }
        let letters = map[digits[index]]
        for (let i = 0; i < letters.length; i++) {
            cur.push(letters[i])
            dfs(index + 1, cur)
            cur.pop()
        }
    }

    dfs(0, [])
    return res
};


Time complexity: O(4^n * n), where n is the length of the digits string (in the worst case when all digits correspond to 4 letters).
Space complexity: O(4^n * n), as space is required to store all combinations and the recursive call stack.
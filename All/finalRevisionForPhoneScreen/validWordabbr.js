/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {

    function isDigit(c) {
        return /^[0-9]$/.test(c)
    }

    let i = 0, j = 0
    while (i < word.length && j < abbr.length) {
        if (isDigit(abbr[j])) {
            if (abbr[j] === "0") return false
            let num = 0
            while (j < abbr.length && isDigit(abbr[j])) {
                num = 10 * num + parseInt(abbr[j])
                j++
            }
            i += num
            console.log(num)
        } else {
            if (word[i] !== abbr[j]) {
                return false
            } else {
                i++
                j++
            }
        }
    }

    if (j===abbr.length && i === word.length) return true
    return false
};


Conclusion:
Time complexity: O(max(n, m)), where n is the length of word and m is the length of abbr.
Space complexity: O(1) (constant space).
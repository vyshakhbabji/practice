// Given a non-empty string word and a string abbr that represents
// an abbreviation of word, return whether the abbreviation is valid.
// A string abbr is a valid abbreviation of word if it can be formed by
// replacing any number of non-overlapping substrings with their lengths.

var validWordAbbreviation = function (word, abbr) {

    function isDigit(c) {
        if (c >= "0" && c <= "9") return true
        return false
    }

    let i = 0, j = 0
    while (i < word.length && j < abbr.length) {
        if (isDigit(abbr[j])) {
            if (abbr[j] === "0") return false
            let nums = 0
            while (j < abbr.length && isDigit(abbr[j])) {
                nums = nums * 10 + parseInt(abbr[j])
                j++
            }
            i += nums
        }
        else if (word[i] !== abbr[j]) return false
        else {
            i++
            j++
        }
    }

    return i === word.length && j === abbr.length
};

// Example usage:
console.log(validWordAbbreviation("internationalization", "i12iz4n")); // Output: true
console.log(validWordAbbreviation("apple", "a2e"));// Output: false
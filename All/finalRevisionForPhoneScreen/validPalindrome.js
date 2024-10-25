var isPalindrome = function (s) {
    if (s.length <= 1) return true
    function isAlphaNumeric(c) {
        return /^[a-zA-Z0-9]$/.test(c)
    }

    let i = 0, j = s.length - 1

    while (i < j) {
        while (i < j && !isAlphaNumeric(s[i])) i++
        while (i < j && !isAlphaNumeric(s[j])) j--
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false
        }
        i++
        j--
    }
    return true

};

Time complexity: O(n), where n is the length of the input string.
Space complexity: O(1), since the algorithm uses only constant extra space.
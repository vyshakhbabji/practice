/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function (n) {

    // str num is a num that looks the same when rotated 180 at upside down
    // [ 0 , 1, 6, 8, 9 ]
    // n = 0 => [""]
    // n = 1  =>  1 digit number => [0 , 1 , 8]
    // n = 2 => [11, 69, 96 , 88 ]
    function helper(n, len) {

        if (n === 0) return [""]
        if (n === 1) return ["0", "1", "8"]

        let middle = helper(n - 2, len)
        const res = []

        for (let m of middle) {
            if (n !== len) {
                res.push("0" + m + "0")
            }
            res.push("1" + m + "1")
            res.push("6" + m + "9")
            res.push("9" + m + "6")
            res.push("8" + m + "8")
        }

        return res
    }

    //return numbers of length n in any order
    return helper(n, n)
};
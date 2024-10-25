var groupStrings = function (strings) {

    function getKey(s) {
        let base = s[0].charCodeAt(0)
        let key = []
        for (let c of s) {
            let charCode = (c.charCodeAt(0) - base + 26) % 26
            key.push(charCode)
        }
        return key,join(",")
    }

    let map = {}
    for (let s of strings) {
        let key = getKey(s)
        if (!(key in map)) map[key] = []
        map[key].push(s)
    }
    return Object.values(map)
};


Conclusion:
Time complexity: O(n * m), where n is the number of strings and m is the average length of each string.
Space complexity: O(n * m) for storing the strings in the map.


var generatePalindromes = function(s) {

    var result = [];
    var map = {};
    var odd = 0;
    var half = '';
    var mid = '';

    for (var i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
        odd += map[s[i]] % 2 !== 0 ? 1 : -1;
    }

    if (odd > 1) return result;

    Object.keys(map).forEach(function(key) {
        if (map[key] % 2 !== 0) mid = key;
        half += key.repeat(map[key] / 2);
    });

    permute(half.split(''), 0, mid, result);

    return result;


    //permute with no swap and using used[i] to keep track of used elements

    function permute(half, start, mid, result) {
        if (start === half.length) {
            result.push(half.join('') + mid + half.slice().reverse().join(''));
        } else {
            for (var i = start; i < half.length; i++) {
                if (half[i] !== half[start] || i === start) {
                    swap(half, i, start);
                    permute(half, start + 1, mid, result);
                    swap(half, i, start);
                }
            }
        }
    }

};
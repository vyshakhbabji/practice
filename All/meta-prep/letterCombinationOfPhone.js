var letterCombinations = function(digits) {
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

    dfs(0,[])

    let res  = []
    if(digits.length === 0 ) return res

    function dfs(index, cur){
        if(cur.length === digits.length){
            res.push(cur.join(('')))
            return
        }

        let letters  = map[digits[index]]
        for(let i = 0 ; i < letters.length ; i++){
            cur.push(letters[i])
            dfs(index+1, cur)
            cur.pop()
        }
    }

    return res
}
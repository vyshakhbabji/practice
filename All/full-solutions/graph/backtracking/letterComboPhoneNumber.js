var letterCombinations = function(digits) {


    let map = {
        2:"abc" ,
        3: "def",
        4:"ghi",
        5:"jkl",
        6:"mno",
        7:"pqrs",
        8:"tuv",
        9:"wxyz"
    }

    let res = []

    function dfs(index,cur){

        if(index ===digits.length) {
            res.push(cur.join(''))
            return
        }

        let letters = map[digits[index]]

        for(let i = 0 ; i<letters.length;i++){

            let letter = letters[i]
            cur.push(letter)
            dfs(index+1, cur)
            cur.pop()

        }

    }

    dfs(0,[])
    return res

};

let digits  = "23"
console.log(letterCombinations(digits))



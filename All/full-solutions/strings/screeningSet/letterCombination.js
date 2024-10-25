
function letterCombination(digits){
    const map = {
        2 : "abc",
        3 :"def",
        4: "ghi",
        5:"jkl",
        6:"mno",
        7: "pqrs",
        8:"tuv",
        9:"wxyz"
    }


    let res = []
    let cur  = []

    function dfs(index){

        //cur will have the letter combo one from each digit
        //so index should be of len (digit)
        // for eg: 23  => ad or bd or be et ...

        if(index == digits.length){
            res.push(cur.join(''))
            return
        }

        // construct cur strins , get letters from digits
        const letters = map[digits[index]]

        // increment the index for digits and construct new letters with cur
        for(let i =0 ; i< letters.length ; i++){
            cur.push(letters[i])
            dfs(index+1)
            cur.pop()
        }

    }


    dfs(0)


    return res

}


console.log(letterCombination("23"))
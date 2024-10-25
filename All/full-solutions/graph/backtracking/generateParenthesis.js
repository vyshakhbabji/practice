function generateParenthesis(n) {
    // constraints :  1. each open should have closed parenthesis
    //2, total parantesis is 2N
    //the parentesis should be valid combination ,,, for every open , there should be close parenthesi
    //not more than n parentesis

    let res = []

    function backtrack(cur, open, close ){
        if(cur.length === n*2){
            res.push(cur)
            return
        }

        if(open<n){
            backtrack(cur + '(',open+1,close)
        }

        if(close<open){
            backtrack(  cur + ')', open, close+1)
        }

    }

    //keep track of open and close counter
    backtrack('',0 , 0 )

    return res


}

let n = 3;
console.log(generateParenthesis(n));

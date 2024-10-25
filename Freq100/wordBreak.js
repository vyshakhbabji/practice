function wordBreak(s, dict){

    let set  = new Set(dict)
    let memo = {} // {3:false , 7 : false  8 : true}

    function dfs(start){
        if(start === s.length ) return true
        if(start in memo ) return memo[start]


        for(let end  = start+1 ; end <= s.length ; end++){
            let word  = s.substring(start,end)
            if(set.has(word ) && dfs(end)) {
                memo[start] = true
                return true
            }
        }
        memo[start] = false
        return false

    }


    return dfs(0)
}


// s = "leetcode", wordDict = ["leet","code"]

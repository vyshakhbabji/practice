function wordBreak2(s , wordDict){
    let memo= {}
    let set = new Set(wordDict)

    function dfs(start){
        if(start in memo ) return memo[start]
        if(start  === s.length) return [""]
        let res = []

        for(let end = start+1 ; end <= s.length ; i++ ){
            let word  = s.substring(start ,end)
            if(set.has(word)){
                let subproblem = dfs(end)
                for(let sub of subproblem ){
                     res.push( word + (sub ? " " + sub : "" ))
                }
            }
        }

        memo[start]= res
        return res
    }

    return dfs(0)
}
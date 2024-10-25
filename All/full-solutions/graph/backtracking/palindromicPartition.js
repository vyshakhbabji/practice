function palindromicPartition(str){

    let res = []

    function isPalindrome(s){
        let l=0, r = s.length-1
        while(l<r){
            if(s[l] !==s[r])
                return false
            l++
            r--
        }
        return true
    }

    //cur is the array with pali
    function dfs(index,cur) {
        //COMPLETE THIS TOMO
        if(index === s.length){
            res.push([...cur])
        }

        for(let i = index ; i < s.length ; i++) {
            let curString = s.substring(index, i + 1)
            if (isPalindrome(curString)) {
                cur.push(curString)
                dfs(i + 1, cur)
                cur.pop()
            }
        }
    }

    dfs(0,[])
    return res
}


let s = "aab"
console.log(palindromicPartition(s))
function subset2(nums){

    //nums  integerArray
    //nums can contain duplicates
    //all possible subset
    //res must not contain duplicate subset

    let res = []
    nums.sort((a,b)=>a-b) // sorting was forgotten

    function dfs(index , cur ){

        res.push([...cur])

        for(let i = index ; i < nums.length ; i ++){
            // remove duplicates
            if(  nums[i-1] ===nums[i] && i>index  ) continue // i is not > 0 ,  its i> index
            //update cur
            cur.push(nums[i])
            //explore
            dfs(i+1, cur)
            // pop element
            cur.pop()
        }
    }
    dfs(0 , [])
    return res
}


console.log(subset2([1,2,2,3]))
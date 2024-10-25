function combinationSum2(nums, target ){

    //each numebr only once
    //input may contain dups
    //avoid dups


    const res = []
    nums.sort((a,b)=>a-b)

    function dfs(index,cur , sum){


        if(sum===target) {
            res.push([...cur])
            return
        }

        if(sum>target) return;

        for(let i= index ; i< nums.length ; i++){

            if(i>0 && nums[i] === nums[i-1]) continue

            cur.push(nums[i])
            dfs(i+1, cur, sum+nums[i])
            cur.pop()

        }


    }

    dfs(0,[], 0)

    return res

}

console.log(combinationSum2([1,1,2,5,6,7,10] , 8))
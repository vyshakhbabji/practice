function combination (nums , k ){


    let res=  []

    function dfs( index , cur){

        // console.log(cur)

        if(cur.length === k ){
            res.push([...cur])
            return
        }

        if(index === nums.length || index+ (nums.length-cur.length) <k){
            return;
        }

        for(let i = index;  i < nums.length ; i++){
            cur.push(nums[i])
            dfs(i+1, cur)
            cur.pop()

        }
    }

    dfs(0 , [])
    return res


}


let nums= [1,2,3]
console.log(combination(nums , 2))


/*
Time : O( N * N!)
SPACE: O(N!) and N for stack

 */
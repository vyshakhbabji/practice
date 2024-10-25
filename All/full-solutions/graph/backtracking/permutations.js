function permute(nums){
    let res = []
    // let cur = []

    let used = Array(nums.length).fill(false)

    function backtrack(cur){

        //base case - when the cur array len === num.len
        if(cur.length === nums.length){
            res.push([...cur])
            return
        }


        for(let i = 0; i <nums.length ; i ++){
            //check if num is already used
            if(used[i]) {
                continue
            }

            //add
            cur.push(nums[i])
            used[i] = true

            //explore
            backtrack(cur)

            //pop and mark number not used
            cur.pop()
            used[i] = false
        }
    }

    backtrack([])
    return res
}


let nums= [1,2,3]
console.log(permute(nums))


/*
Time : O( N * N!)
SPACE: O(N!) and N for stack

 */
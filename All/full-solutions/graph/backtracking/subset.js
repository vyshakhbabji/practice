function subset(nums){

    let res= []


    function dfs(index , cur){

        res.push([...cur])

        // start from the cur index , not from 0
        for(let i = index ; i<nums.length ; i++){
            //include this element in subset
            cur.push(nums[i])
            //move to next element
            dfs(i+1,cur)
            //remvoe this element
            cur.pop()
        }

    }

    dfs(0 , [])

    return res

}


let nums= [1,2,3]
console.log(subset(nums))



function combinationSum(nums, target){

    //distinct integers in nums
    //return list of all unique combo pf candidates  sum = target
    //any order result - sorting not required
    //same number can be chosen unlimieed times

    const res =[]

    function dfs(index, cur, sum){

        if(sum === target) {
            res.push([...cur])
            return;
        }

        if (target < sum) {
            return;
        }

        for(let i = index; i < nums.length; i++){

            cur.push(nums[i])
            dfs(i, cur, sum+nums[i])
            cur.pop()

        }

    }

    dfs(0, [] , 0)

    return res



}

console.log(combinationSum([2,3,6,7] , 7)) /// [2,2,3] [7]